#!/usr/bin/env node

/**
 * Blog Generator Script
 *
 * Converts Jupyter notebooks from GitHub repos and Medium RSS articles
 * into Docusaurus blog posts. Configurable via blog-sources.json.
 *
 * Usage: node scripts/generate-blogs.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const Parser = require("rss-parser");

const SOURCES = require("./blog-sources.json");
const BLOG_DIR = path.resolve(__dirname, "../blog");
const TEMP_DIR = path.resolve(__dirname, "../.tmp-repos");
const GENERATED_MARKER = "<!-- generated-blog-post -->";

// ─── Utilities ───────────────────────────────────────────────────────────────

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function cleanGeneratedPosts() {
    if (!fs.existsSync(BLOG_DIR)) return;
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(BLOG_DIR, entry.name);
        if (entry.isDirectory()) {
            const indexFile = path.join(fullPath, "index.md");
            if (
                fs.existsSync(indexFile) &&
                fs.readFileSync(indexFile, "utf8").includes(GENERATED_MARKER)
            ) {
                fs.rmSync(fullPath, { recursive: true });
            }
        } else if (
            entry.isFile() &&
            fs.readFileSync(fullPath, "utf8").includes(GENERATED_MARKER)
        ) {
            fs.unlinkSync(fullPath);
        }
    }
}

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function stripAnsi(str) {
    return str.replace(/\u001b\[[0-9;]*m/g, "");
}

/**
 * Escape ALL HTML tags in text. MDX (used by Docusaurus for .md files)
 * treats angle brackets as JSX which breaks on unclosed/malformed HTML.
 * This preserves markdown syntax (# headers, **bold**, [links](), ![images]())
 * which don't use HTML angle brackets.
 */
function escapeAllHtmlTags(text) {
    const lines = text.split("\n");
    let inCodeBlock = false;
    const result = [];

    for (const line of lines) {
        if (line.trim().startsWith("```")) {
            inCodeBlock = !inCodeBlock;
            result.push(line);
            continue;
        }

        if (inCodeBlock) {
            // Inside code blocks, escape all angle brackets
            result.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            continue;
        }

        // Outside code blocks, escape anything that looks like an HTML tag
        // but preserve markdown image syntax ![alt](url)
        const escaped = line.replace(/<[^>]*>/g, (match) => {
            return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        });
        result.push(escaped);
    }

    return result.join("\n");
}

/**
 * Escape angle brackets in code block content only (for output blocks)
 */
function escapeCodeBlockContent(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Convert relative image paths in notebook markdown to GitHub raw URLs.
 * e.g., ![img](images/foo.png) → ![img](https://raw.githubusercontent.com/user/repo/branch/path/images/foo.png)
 */
function fixImagePaths(md, repoInfo, notebookRelPath) {
    const notebookDir = path.dirname(notebookRelPath);
    const baseUrl = `https://raw.githubusercontent.com/${repoInfo.repo}/${repoInfo.branch}`;

    // Fix markdown image syntax: ![alt](relative/path)
    md = md.replace(/!\[([^\]]*)\]\((?!https?:\/\/|data:)([^)]+)\)/g, (match, alt, imgPath) => {
        const resolved = path.posix.join(notebookDir, imgPath);
        return `![${alt}](${baseUrl}/${encodeURI(resolved)})`;
    });

    // Fix HTML img tags: src="relative/path"
    md = md.replace(/src="(?!https?:\/\/|data:)([^"]+)"/g, (match, imgPath) => {
        const resolved = path.posix.join(notebookDir, imgPath);
        return `src="${baseUrl}/${encodeURI(resolved)}"`;
    });

    return md;
}

// ─── Notebook → Markdown Conversion ─────────────────────────────────────────

function convertNotebookToMarkdown(notebookPath, repoInfo, relativePath) {
    const raw = fs.readFileSync(notebookPath, "utf8");
    let notebook;
    try {
        notebook = JSON.parse(raw);
    } catch {
        console.warn(`  ⚠ Skipping invalid JSON: ${notebookPath}`);
        return null;
    }

    const cells = notebook.cells || [];
    if (cells.length === 0) return null;

    const language =
        notebook.metadata?.kernelspec?.language ||
        notebook.metadata?.language_info?.name ||
        "python";

    const parts = [];

    for (const cell of cells) {
        const source = Array.isArray(cell.source)
            ? cell.source.join("")
            : cell.source || "";

        if (!source.trim()) continue;

        if (cell.cell_type === "markdown") {
            let md = source.trim();
            // Convert relative image paths to GitHub raw URLs
            md = fixImagePaths(md, repoInfo, relativePath);
            // Escape ALL HTML tags in notebook markdown cells.
            md = escapeAllHtmlTags(md);
            parts.push(md);
        } else if (cell.cell_type === "code") {
            parts.push("```" + language + "\n" + source.trim() + "\n```");

            // Process outputs — text only, skip HTML/images to avoid MDX issues
            if (cell.outputs && cell.outputs.length > 0) {
                const outputParts = [];
                for (const output of cell.outputs) {
                    if (output.output_type === "stream") {
                        const text = Array.isArray(output.text)
                            ? output.text.join("")
                            : output.text || "";
                        const cleaned = stripAnsi(text.trim());
                        if (cleaned) {
                            outputParts.push(cleaned);
                        }
                    } else if (
                        output.output_type === "execute_result" ||
                        output.output_type === "display_data"
                    ) {
                        if (output.data) {
                            // Handle images — save as base64 img tag inside code block description
                            if (output.data["image/png"]) {
                                const b64 = Array.isArray(
                                    output.data["image/png"]
                                )
                                    ? output.data["image/png"].join("")
                                    : output.data["image/png"];
                                parts.push(
                                    `\n![Output](data:image/png;base64,${b64.trim()})\n`
                                );
                            } else if (output.data["text/plain"]) {
                                const text = Array.isArray(
                                    output.data["text/plain"]
                                )
                                    ? output.data["text/plain"].join("")
                                    : output.data["text/plain"];
                                const cleaned = stripAnsi(text.trim());
                                if (cleaned) outputParts.push(cleaned);
                            }
                            // Skip text/html and image/svg+xml — causes MDX parse errors
                        }
                    } else if (output.output_type === "error") {
                        const ename = output.ename || "Error";
                        const evalue = output.evalue || "";
                        outputParts.push(`${ename}: ${stripAnsi(evalue)}`);
                    }
                }
                if (outputParts.length > 0) {
                    const combined = outputParts.join("\n").trim();
                    // Truncate very long outputs
                    const truncated =
                        combined.length > 3000
                            ? combined.slice(0, 3000) +
                              "\n... (output truncated)"
                            : combined;
                    // Escape angle brackets in output to prevent MDX issues
                    const safeOutput = escapeCodeBlockContent(truncated);
                    parts.push(
                        "**Output:**\n```\n" + safeOutput + "\n```"
                    );
                }
            }
        }
    }

    return parts.join("\n\n");
}

function getTitleFromNotebook(notebookPath) {
    try {
        const raw = fs.readFileSync(notebookPath, "utf8");
        const nb = JSON.parse(raw);
        for (const cell of nb.cells || []) {
            if (cell.cell_type === "markdown") {
                const source = Array.isArray(cell.source)
                    ? cell.source.join("")
                    : cell.source;
                const match = source.match(/^#\s+(.+)/m);
                if (match) return match[1].trim();
            }
        }
    } catch {}

    // Fallback to filename
    return path
        .basename(notebookPath, ".ipynb")
        .replace(/^\d+-?/, "")
        .replace(/[-_]/g, " ")
        .replace(/\(.*?\)/g, "")
        .trim();
}

// ─── Generate Notebook Blog Posts ────────────────────────────────────────────

function processNotebookRepo(repoConfig) {
    const { repo, branch, label, tags, author } = repoConfig;
    const repoName = repo.split("/")[1];
    const repoDir = path.join(TEMP_DIR, repoName);

    console.log(`\n📓 Processing repo: ${repo}`);

    if (!fs.existsSync(repoDir)) {
        console.log(`  Cloning ${repo}...`);
        execSync(
            `git clone --depth 1 --branch ${branch} https://github.com/${repo}.git "${repoDir}"`,
            { stdio: "pipe" }
        );
    }

    // Find all .ipynb files
    const notebooks = [];
    function findNotebooks(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (
                    entry.name === ".ipynb_checkpoints" ||
                    entry.name === "node_modules" ||
                    entry.name === ".git"
                )
                    continue;
                findNotebooks(full);
            } else if (entry.name.endsWith(".ipynb")) {
                notebooks.push(full);
            }
        }
    }
    findNotebooks(repoDir);

    console.log(`  Found ${notebooks.length} notebooks`);

    let generated = 0;
    const tocEntries = [];

    for (const nbPath of notebooks) {
        const relativePath = path.relative(repoDir, nbPath);
        const fileName = path.basename(nbPath, ".ipynb");

        if (
            relativePath.includes(".ipynb_checkpoint") ||
            fileName === "todo"
        ) {
            continue;
        }

        const repoInfo = { repo, branch };
        const markdown = convertNotebookToMarkdown(nbPath, repoInfo, relativePath);
        if (!markdown) continue;

        const title = getTitleFromNotebook(nbPath);
        const category =
            path.dirname(relativePath).split(path.sep)[0] || label;
        const slug = slugify(
            `${label}-${relativePath.replace(/\.ipynb$/, "")}`
        );

        const baseDate = new Date("2022-01-15");
        baseDate.setDate(baseDate.getDate() + generated);
        const dateStr = baseDate.toISOString().split("T")[0];

        // Build tag list with topic detection
        const postTags = [...tags];
        const lowerPath = relativePath.toLowerCase();
        const topicMap = {
            regression: "regression",
            classification: "classification",
            neural: "neural-networks",
            nlp: "nlp",
            clustering: "clustering",
            numpy: "numpy",
            pandas: "pandas",
            matplotlib: "matplotlib",
            oops: "oop",
            oop: "oop",
            decorator: "decorators",
            recursion: "recursion",
            "linked list": "linked-list",
            stack: "stack",
            queue: "queue",
            "binary tree": "binary-tree",
            "face detection": "computer-vision",
            preprocessing: "data-preprocessing",
        };
        for (const [keyword, tag] of Object.entries(topicMap)) {
            if (lowerPath.includes(keyword)) postTags.push(tag);
        }
        const uniqueTags = [...new Set(postTags)];

        const githubLink = `https://github.com/${repo}/blob/${branch}/${encodeURI(relativePath)}`;

        // Escape title for YAML
        const safeTitle = title.replace(/"/g, '\\"').replace(/:/g, ' -');

        const content = [
            "---",
            `title: "${safeTitle}"`,
            `slug: ${slug}`,
            `date: ${dateStr}`,
            `authors: [${author}]`,
            `tags: [${uniqueTags.join(", ")}]`,
            "---",
            "",
            GENERATED_MARKER,
            "",
            `> **Source**: [View original notebook on GitHub](${githubLink})`,
            `>`,
            `> **Category**: ${label} / ${category.replace(/[-_]/g, " ")}`,
            "",
            "<!-- truncate -->",
            "",
            markdown,
        ].join("\n");

        const outputFile = path.join(BLOG_DIR, `${dateStr}-${slug}.md`);
        fs.writeFileSync(outputFile, content, "utf8");

        // Collect TOC entry with folder path
        tocEntries.push({
            title,
            slug,
            path: relativePath.replace(/\.ipynb$/, ""),
            folderPath: path.dirname(relativePath),
            githubLink,
            tags: uniqueTags,
        });

        generated++;
    }

    console.log(`  ✅ Generated ${generated} blog posts from ${label}`);
    return { count: generated, tocEntries };
}

// ─── Generate Medium Blog Posts ──────────────────────────────────────────────

function htmlToMarkdown(html) {
    return html
        // Remove Medium figure wrappers, keep images
        .replace(/<figure[^>]*>/gi, "")
        .replace(/<\/figure>/gi, "")
        .replace(/<figcaption[^>]*>(.*?)<\/figcaption>/gi, "\n*$1*\n")
        // Headers
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n# $1\n")
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n")
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n")
        .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n#### $1\n")
        // Paragraphs
        .replace(/<p[^>]*>(.*?)<\/p>/gis, "\n$1\n")
        // Links
        .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
        // Bold / italic
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
        .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
        // Code
        .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gis, "\n```\n$1\n```\n")
        .replace(/<pre[^>]*>(.*?)<\/pre>/gis, "\n```\n$1\n```\n")
        .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
        // Lists
        .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1")
        .replace(/<\/?[uo]l[^>]*>/gi, "\n")
        // Blockquotes
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, "\n> $1\n")
        // Images — extract src and alt
        .replace(
            /<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi,
            "\n![$2]($1)\n"
        )
        .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, "\n![]($1)\n")
        // Line breaks
        .replace(/<br\s*\/?>/gi, "\n")
        // Horizontal rules
        .replace(/<hr\s*\/?>/gi, "\n---\n")
        // Strip all remaining HTML tags
        .replace(/<[^>]+>/g, "")
        // Decode entities
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ")
        // Clean up excessive newlines
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

async function processMediumFeed(mediumConfig) {
    const { feedUrl, author } = mediumConfig;

    console.log(`\n📰 Fetching Medium feed: ${feedUrl}`);
    const mediumEntries = [];

    const parser = new Parser({
        customFields: {
            item: [["content:encoded", "fullContent"]],
        },
    });

    let feed;
    try {
        feed = await parser.parseURL(feedUrl);
    } catch (err) {
        console.warn(`  ⚠ Failed to fetch Medium feed: ${err.message}`);
        return 0;
    }

    console.log(`  Found ${feed.items.length} articles`);

    let generated = 0;
    for (const item of feed.items) {
        const title = item.title || "Untitled";
        const date = item.pubDate
            ? new Date(item.pubDate).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0];
        const slug = slugify(`medium-${title}`);
        const categories = (item.categories || []).map((c) => slugify(c));
        const tags = ["medium", ...categories.slice(0, 5)];
        const link = item.link || "";

        let content = htmlToMarkdown(item.fullContent || item.content || "");
        content = escapeAllHtmlTags(content);
        const safeTitle = title.replace(/"/g, '\\"').replace(/:/g, ' -');

        const post = [
            "---",
            `title: "${safeTitle}"`,
            `slug: ${slug}`,
            `date: ${date}`,
            `authors: [${author}]`,
            `tags: [${tags.join(", ")}]`,
            "---",
            "",
            GENERATED_MARKER,
            "",
            `> **Originally published on Medium**: [Read on Medium](${link})`,
            "",
            "<!-- truncate -->",
            "",
            content,
        ].join("\n");

        const outputFile = path.join(BLOG_DIR, `${date}-${slug}.md`);
        fs.writeFileSync(outputFile, post, "utf8");

        mediumEntries.push({
            title,
            slug,
            date,
            link,
            tags,
        });

        generated++;
    }

    console.log(`  ✅ Generated ${generated} blog posts from Medium`);
    return { count: generated, mediumEntries };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
    console.log("🚀 Blog Generator — Starting\n");
    console.log("=".repeat(50));

    ensureDir(BLOG_DIR);

    // Write authors.yml from config
    const authorsYml = Object.entries(SOURCES.authors)
        .map(
            ([key, val]) =>
                `${key}:\n  name: ${val.name}\n  title: ${val.title}\n  url: ${val.url}\n  image_url: ${val.image_url}`
        )
        .join("\n\n");
    fs.writeFileSync(path.join(BLOG_DIR, "authors.yml"), authorsYml, "utf8");
    console.log("📝 Updated authors.yml");

    // Clean previously generated posts
    cleanGeneratedPosts();
    console.log("🧹 Cleaned old generated posts");

    ensureDir(TEMP_DIR);

    let totalPosts = 0;
    const tocData = { notebooks: {}, medium: [] };

    // Process notebook repos
    for (const repoConfig of SOURCES.notebooks) {
        try {
            const result = processNotebookRepo(repoConfig);
            totalPosts += result.count;
            tocData.notebooks[repoConfig.label] = {
                repo: repoConfig.repo,
                branch: repoConfig.branch,
                entries: result.tocEntries,
            };
        } catch (err) {
            console.error(
                `  ❌ Error processing ${repoConfig.repo}: ${err.message}`
            );
        }
    }

    // Process Medium feed
    if (SOURCES.medium) {
        try {
            const result = await processMediumFeed(SOURCES.medium);
            totalPosts += result.count;
            tocData.medium = result.mediumEntries;
        } catch (err) {
            console.error(`  ❌ Error processing Medium: ${err.message}`);
        }
    }

    // Write TOC data for the TOC page component
    const tocOutputPath = path.resolve(__dirname, "../src/data/toc.json");
    ensureDir(path.dirname(tocOutputPath));
    fs.writeFileSync(tocOutputPath, JSON.stringify(tocData, null, 2), "utf8");
    console.log("\n📋 Generated TOC data at src/data/toc.json");

    // Cleanup temp repos
    if (fs.existsSync(TEMP_DIR)) {
        fs.rmSync(TEMP_DIR, { recursive: true });
        console.log("🧹 Cleaned up temp repos");
    }

    console.log("\n" + "=".repeat(50));
    console.log(`✅ Done! Generated ${totalPosts} total blog posts.`);
}

main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
});

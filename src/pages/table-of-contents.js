import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import tocData from "@site/src/data/toc.json";
import styles from "./table-of-contents.module.css";

const NOTES_LIST = [
    { title: "Author Introduction", link: "/docs/intro" },
    { title: "1. STL (Standard Template Library)", link: "/docs/stl" },
    { title: "2. C++", link: "/docs/cpp" },
    { title: "3. Algorithms", link: "/docs/algo" },
    { title: "4. Graphs", link: "/docs/graphs" },
    { title: "5. Advanced DS & CP Approaches", link: "/docs/advance-ds_approaches" },
    { title: "6. Game Theory", link: "/docs/gameTheory" },
    { title: "7. Dynamic Programming", link: "/docs/dp" },
    { title: "8. Maths & Aptitude", link: "/docs/maths-and-aptitude" },
    { title: "9. Interview Questions", link: "/docs/questions" },
    { title: "10. PostgreSQL", link: "/docs/postgresql" },
    { title: "11. JavaScript + React", link: "/docs/js+react" },
    { title: "12. Gatsby", link: "/docs/gatsby" },
    { title: "13. Code Template (C++)", link: "/docs/template" },
    { title: "14. Competitive Programming", link: "/docs/cp" },
    { title: "15. Other Subjects", link: "/docs/OtherSubjects" },
    { title: "16. DevOps", link: "/docs/Devops" },
    { title: "17. Node.js", link: "/docs/nodejs" },
    { title: "18. AWS", link: "/docs/aws" },
    { title: "19. Webpack", link: "/docs/webpack" },
    { title: "20. System Design", link: "/docs/systemDesign" },
    { title: "21. Design Patterns (JS)", link: "/docs/design_patterns" },
    { title: "22. Stocks Basics", link: "/docs/StocksBasics" },
    { title: "23. TypeScript", link: "/docs/typescript" },
    { title: "24. Docker & Kubernetes", link: "/docs/docker-kubernates" },
];

function buildTree(entries) {
    const tree = {};
    for (const entry of entries) {
        const parts = entry.folderPath === "." ? [] : entry.folderPath.split("/");
        let node = tree;
        for (const part of parts) {
            if (!node[part]) node[part] = { __children: [], __entries: [] };
            node = node[part];
        }
        if (!node.__entries) node.__entries = [];
        node.__entries.push(entry);
    }
    return tree;
}

function TreeNode({ name, node, depth = 0 }) {
    const [expanded, setExpanded] = useState(depth < 2);
    const subfolders = Object.keys(node).filter(
        (k) => k !== "__entries" && k !== "__children"
    );
    const entries = node.__entries || [];
    const hasContent = subfolders.length > 0 || entries.length > 0;

    if (!hasContent) return null;

    const displayName = name
        .replace(/^\d+-?/, "")
        .replace(/[-_]/g, " ")
        .trim();

    return (
        <div className={styles.treeNode} style={{ marginLeft: depth * 16 }}>
            {name && (
                <div
                    className={styles.folderHeader}
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className={styles.folderIcon}>
                        {expanded ? "📂" : "📁"}
                    </span>
                    <span className={styles.folderName}>{displayName}</span>
                    <span className={styles.count}>
                        ({countEntries(node)})
                    </span>
                </div>
            )}
            {(expanded || !name) && (
                <div className={styles.folderContent}>
                    {entries.map((entry, i) => (
                        <div key={i} className={styles.notebookEntry}>
                            <span className={styles.notebookIcon}>📓</span>
                            <Link
                                to={`/blog/${entry.slug}`}
                                className={styles.notebookLink}
                            >
                                {entry.title}
                            </Link>
                            <a
                                href={entry.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                                title="View on GitHub"
                            >
                                ↗
                            </a>
                        </div>
                    ))}
                    {subfolders.sort().map((subfolder) => (
                        <TreeNode
                            key={subfolder}
                            name={subfolder}
                            node={node[subfolder]}
                            depth={depth + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function countEntries(node) {
    let count = (node.__entries || []).length;
    for (const key of Object.keys(node)) {
        if (key !== "__entries" && key !== "__children") {
            count += countEntries(node[key]);
        }
    }
    return count;
}

export default function TableOfContents() {
    const notebookSections = tocData.notebooks || {};
    const mediumPosts = tocData.medium || [];
    const totalNotebooks = Object.values(notebookSections).reduce(
        (sum, sec) => sum + (sec.entries || []).length,
        0
    );

    return (
        <Layout
            title="Table of Contents"
            description="Browse all notebooks and articles organized by topic"
        >
            <main className={styles.container}>
                <h1 className={styles.pageTitle}>Table of Contents</h1>
                <p className={styles.subtitle}>
                    {totalNotebooks} notebooks + {mediumPosts.length} Medium
                    articles — organized by repo structure
                </p>

                {Object.entries(notebookSections).map(
                    ([label, section]) => {
                        const tree = buildTree(section.entries);
                        return (
                            <div key={label} className={styles.repoSection}>
                                <div className={styles.repoHeader}>
                                    <h2 className={styles.repoTitle}>
                                        {label}
                                    </h2>
                                    <a
                                        href={`https://github.com/${section.repo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.repoLink}
                                    >
                                        View Repository ↗
                                    </a>
                                </div>
                                <div className={styles.treeContainer}>
                                    <TreeNode name="" node={tree} depth={0} />
                                </div>
                            </div>
                        );
                    }
                )}

                {mediumPosts.length > 0 && (
                    <div className={styles.repoSection}>
                        <div className={styles.repoHeader}>
                            <h2 className={styles.repoTitle}>
                                Medium Articles
                            </h2>
                        </div>
                        <div className={styles.treeContainer}>
                            {mediumPosts.map((post, i) => (
                                <div
                                    key={i}
                                    className={styles.notebookEntry}
                                >
                                    <span className={styles.notebookIcon}>
                                        ✍️
                                    </span>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className={styles.notebookLink}
                                    >
                                        {post.title}
                                    </Link>
                                    <span className={styles.dateLabel}>
                                        {post.date}
                                    </span>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.githubLink}
                                        title="View on Medium"
                                    >
                                        ↗
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.repoSection}>
                    <div className={styles.repoHeader}>
                        <h2 className={styles.repoTitle}>Notes (Docs)</h2>
                        <Link to="/docs/intro" className={styles.repoLink}>
                            Browse All Notes →
                        </Link>
                    </div>
                    <div className={styles.treeContainer}>
                        {NOTES_LIST.map((note, i) => (
                            <div key={i} className={styles.notebookEntry}>
                                <span className={styles.notebookIcon}>
                                    📖
                                </span>
                                <Link
                                    to={note.link}
                                    className={styles.notebookLink}
                                >
                                    {note.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}

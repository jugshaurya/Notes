import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import tocData from "@site/src/data/toc.json";
import styles from "./styles.module.css";

/**
 * Build a nested tree from flat TOC entries based on folder paths.
 * Mirrors the GitHub repo folder structure.
 */
function buildTree(entries) {
    const root = { _entries: [], _children: {} };

    for (const entry of entries) {
        const parts =
            entry.folderPath === "." ? [] : entry.folderPath.split("/");
        let node = root;
        for (const part of parts) {
            if (!node._children[part]) {
                node._children[part] = { _entries: [], _children: {} };
            }
            node = node._children[part];
        }
        node._entries.push(entry);
    }

    return root;
}

function countAll(node) {
    let c = node._entries.length;
    for (const child of Object.values(node._children)) {
        c += countAll(child);
    }
    return c;
}

function cleanName(name) {
    return name
        .replace(/^\d+-?\s*/, "")
        .replace(/[-_]/g, " ")
        .trim();
}

/**
 * Check if the current path matches any entry in this node or its children
 */
function nodeContainsSlug(node, currentSlug) {
    if (node._entries.some((e) => `/blog/${e.slug}` === currentSlug)) {
        return true;
    }
    for (const child of Object.values(node._children)) {
        if (nodeContainsSlug(child, currentSlug)) return true;
    }
    return false;
}

function FolderNode({ name, node, depth, currentPath }) {
    const containsCurrent = useMemo(
        () => nodeContainsSlug(node, currentPath),
        [node, currentPath]
    );
    const [expanded, setExpanded] = useState(containsCurrent);

    useEffect(() => {
        if (containsCurrent) setExpanded(true);
    }, [containsCurrent]);

    const childKeys = Object.keys(node._children).sort();
    const entries = node._entries;
    const total = countAll(node);
    const displayName = cleanName(name);

    return (
        <li className={styles.folderItem}>
            <button
                className={`${styles.folderButton} ${
                    expanded ? styles.folderExpanded : ""
                } ${containsCurrent ? styles.folderActive : ""}`}
                onClick={() => setExpanded((v) => !v)}
                type="button"
            >
                <span className={styles.chevron}>
                    {expanded ? "▾" : "▸"}
                </span>
                <span className={styles.folderLabel}>{displayName}</span>
                <span className={styles.badge}>{total}</span>
            </button>
            {expanded && (
                <ul className={styles.subList}>
                    {entries.map((entry, i) => (
                        <EntryItem
                            key={`e-${i}`}
                            entry={entry}
                            currentPath={currentPath}
                        />
                    ))}
                    {childKeys.map((key) => (
                        <FolderNode
                            key={key}
                            name={key}
                            node={node._children[key]}
                            depth={depth + 1}
                            currentPath={currentPath}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}

function EntryItem({ entry, currentPath }) {
    const href = `/blog/${entry.slug}`;
    const isActive = currentPath === href;

    return (
        <li className={styles.entryItem}>
            <Link
                to={href}
                className={`${styles.entryLink} ${
                    isActive ? styles.entryActive : ""
                }`}
            >
                {entry.title}
            </Link>
        </li>
    );
}

function RepoSection({ label, section, currentPath }) {
    const tree = useMemo(() => buildTree(section.entries), [section.entries]);
    const containsCurrent = useMemo(
        () => nodeContainsSlug(tree, currentPath),
        [tree, currentPath]
    );
    const [expanded, setExpanded] = useState(containsCurrent);
    const childKeys = Object.keys(tree._children).sort();

    return (
        <div className={styles.repoSection}>
            <button
                className={styles.repoButton}
                onClick={() => setExpanded((v) => !v)}
                type="button"
            >
                <span className={styles.chevron}>
                    {expanded ? "▾" : "▸"}
                </span>
                <span className={styles.repoLabel}>{label}</span>
                <span className={styles.badge}>{section.entries.length}</span>
            </button>
            {expanded && (
                <ul className={styles.rootList}>
                    {tree._entries.map((entry, i) => (
                        <EntryItem
                            key={`e-${i}`}
                            entry={entry}
                            currentPath={currentPath}
                        />
                    ))}
                    {childKeys.map((key) => (
                        <FolderNode
                            key={key}
                            name={key}
                            node={tree._children[key]}
                            depth={0}
                            currentPath={currentPath}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

function MediumSection({ medium, currentPath }) {
    const containsCurrent = medium.some(
        (p) => `/blog/${p.slug}` === currentPath
    );
    const [expanded, setExpanded] = useState(containsCurrent);

    return (
        <div className={styles.repoSection}>
            <button
                className={styles.repoButton}
                onClick={() => setExpanded((v) => !v)}
                type="button"
            >
                <span className={styles.chevron}>
                    {expanded ? "▾" : "▸"}
                </span>
                <span className={styles.repoLabel}>Medium Articles</span>
                <span className={styles.badge}>{medium.length}</span>
            </button>
            {expanded && (
                <ul className={styles.rootList}>
                    {medium.map((post, i) => (
                        <EntryItem
                            key={i}
                            entry={post}
                            currentPath={currentPath}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function BlogSidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const notebooks = tocData.notebooks || {};
    const medium = tocData.medium || [];
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile drawer on navigation
    useEffect(() => {
        setMobileOpen(false);
    }, [currentPath]);

    return (
        <>
            <button
                className={styles.mobileToggle}
                onClick={() => setMobileOpen((v) => !v)}
                type="button"
                aria-label="Toggle sidebar"
            >
                {mobileOpen ? "✕" : "☰"} Posts
            </button>
            {mobileOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setMobileOpen(false)}
                />
            )}
            <div
                className={`${styles.sidebar} ${
                    mobileOpen ? styles.sidebarOpen : ""
                }`}
            >
                <nav className={styles.nav}>
                    <div className={styles.sidebarHeader}>
                        <Link to="/blog" className={styles.headerLink}>
                            All Posts
                        </Link>
                        <Link
                            to="/table-of-contents"
                            className={styles.tocLink}
                            title="Full Table of Contents"
                        >
                            TOC
                        </Link>
                    </div>

                    {medium.length > 0 && (
                        <MediumSection
                            medium={medium}
                            currentPath={currentPath}
                        />
                    )}

                    {Object.entries(notebooks).map(([label, section]) => (
                        <RepoSection
                            key={label}
                            label={label}
                            section={section}
                            currentPath={currentPath}
                        />
                    ))}
                </nav>
            </div>
        </>
    );
}

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "DSA & Competitive Programming",
        emoji: "🧠",
        description: (
            <>
                In-depth notes on Data Structures, Algorithms, Graph Theory,
                Dynamic Programming, Game Theory, and Competitive Programming
                strategies.
            </>
        ),
    },
    {
        title: "Interview Preparation",
        emoji: "💼",
        description: (
            <>
                Comprehensive interview questions and answers covering C++,
                JavaScript, React, System Design, and more — all in one place.
            </>
        ),
    },
    {
        title: "Web Development",
        emoji: "🌐",
        description: (
            <>
                Notes on JavaScript, React, TypeScript, Node.js, Gatsby,
                PostgreSQL, Docker, Kubernetes, and AWS for full-stack
                development.
            </>
        ),
    },
    {
        title: "Quick Revision Friendly",
        emoji: "⚡",
        description: (
            <>
                Organized and concise notes designed for quick revision before
                interviews and contests. Search, browse, and find what you need
                fast.
            </>
        ),
    },
    {
        title: "Code Templates & Snippets",
        emoji: "📝",
        description: (
            <>
                Ready-to-use code templates for common patterns — binary search,
                graph traversals, DP approaches, STL tricks, and more.
            </>
        ),
    },
    {
        title: "Open Source & Always Growing",
        emoji: "🚀",
        description: (
            <>
                Completely open source on GitHub. Notes are continuously updated
                with new topics, corrections, and community contributions.
            </>
        ),
    },
];

function Feature({ emoji, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className={styles.featureCard}>
                <div className={styles.featureEmoji}>{emoji}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className={styles.sectionTitle}>
                    What's Inside These Notes?
                </h2>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { Analytics } from "@vercel/analytics/react";

function FloatingShapes() {
    return (
        <div className={styles.shapesContainer} aria-hidden="true">
            <div className={`${styles.shape} ${styles.shape1}`} />
            <div className={`${styles.shape} ${styles.shape2}`} />
            <div className={`${styles.shape} ${styles.shape3}`} />
            <div className={`${styles.shape} ${styles.shape4}`} />
            <div className={`${styles.shape} ${styles.shape5}`} />
            <div className={`${styles.shape} ${styles.shape6}`} />
            <div className={styles.gridOverlay} />
        </div>
    );
}

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <FloatingShapes />
            <div className={styles.heroContent}>
                <div className={styles.heroGlow} />
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatarRing}>
                        <div className={styles.avatarRingInner} />
                    </div>
                    <img
                        src="img/shaurya-bitmoji.jpeg"
                        alt="Shaurya Singhal"
                        className={styles.heroAvatar}
                    />
                </div>
                <div className={styles.heroBadge}>
                    <span className={styles.badgeDot} />
                    Senior Software Engineer
                </div>
                <h1 className={styles.heroTitle}>
                    <span className={styles.heroTitleLine1}>Shaurya's</span>
                    <span className={styles.heroTitleLine2}>Notes Lab</span>
                </h1>
                <p className={styles.heroTagline}>
                    Your ultimate cheat-sheet for cracking{" "}
                    <span className={styles.highlight}>Interviews</span>,
                    mastering{" "}
                    <span className={styles.highlight}>Algorithms</span>, and
                    leveling up in{" "}
                    <span className={styles.highlight}>
                        Competitive Programming
                    </span>
                </p>
                <div className={styles.heroButtons}>
                    <Link to="/docs/intro" className={styles.btnPrimary}>
                        <span className={styles.btnIcon}>&#9889;</span>
                        Explore Notes
                    </Link>
                    <Link to="/blog" className={styles.btnSecondary}>
                        <span className={styles.btnIcon}>&#128218;</span>
                        Read Blog
                    </Link>
                    <Link
                        to="/table-of-contents"
                        className={styles.btnOutline}
                    >
                        <span className={styles.btnIcon}>&#128506;</span>
                        Full TOC
                    </Link>
                </div>
            </div>
        </header>
    );
}

const TOPICS = [
    {
        icon: "🧬",
        title: "Data Structures & Algorithms",
        desc: "Arrays, Trees, Graphs, DP, Game Theory — the full arsenal.",
        tags: ["DSA", "Graphs", "DP"],
        link: "/docs/algo",
        color: "var(--card-green)",
    },
    {
        icon: "🐍",
        title: "Python & Machine Learning",
        desc: "From basics to Neural Networks — 53 interactive notebooks.",
        tags: ["Python", "ML", "NumPy"],
        link: "/blog",
        color: "var(--card-blue)",
    },
    {
        icon: "⚛️",
        title: "JavaScript & React",
        desc: "Modern JS, React patterns, Node.js, TypeScript deep-dives.",
        tags: ["JS", "React", "TS"],
        link: "/docs/js+react",
        color: "var(--card-orange)",
    },
    {
        icon: "🏗️",
        title: "System Design",
        desc: "Architecture patterns, design principles, scalability concepts.",
        tags: ["Design", "Architecture"],
        link: "/docs/systemDesign",
        color: "var(--card-pink)",
    },
    {
        icon: "🐳",
        title: "DevOps & Cloud",
        desc: "Docker, Kubernetes, AWS, CI/CD pipelines and more.",
        tags: ["Docker", "K8s", "AWS"],
        link: "/docs/docker-kubernates",
        color: "var(--card-cyan)",
    },
    {
        icon: "💼",
        title: "Interview Questions",
        desc: "8000+ lines of curated Q&A across all major topics.",
        tags: ["Interview", "Q&A"],
        link: "/docs/questions",
        color: "var(--card-yellow)",
    },
];

function TopicCard({ icon, title, desc, tags, link, color }) {
    return (
        <Link to={link} className={styles.topicCard}>
            <div
                className={styles.cardGlow}
                style={{ background: color }}
            />
            <div className={styles.cardIcon}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
            <div className={styles.cardTags}>
                {tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}

function LeetCodeBanner() {
    return (
        <section className={styles.leetcodeSection}>
            <a
                href="https://leetcode.com/u/jugshaurya/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.leetcodeCard}
            >
                <div className={styles.leetcodeBadge}>
                    <span className={styles.leetcodeRank}>Guardian</span>
                </div>
                <div className={styles.leetcodeStats}>
                    <div className={styles.leetcodeStat}>
                        <span className={styles.leetcodeNum}>2236</span>
                        <span className={styles.leetcodeLabel}>
                            Contest Rating
                        </span>
                    </div>
                    <div className={styles.leetcodeDivider} />
                    <div className={styles.leetcodeStat}>
                        <span className={styles.leetcodeNum}>697</span>
                        <span className={styles.leetcodeLabel}>
                            Problems Solved
                        </span>
                    </div>
                    <div className={styles.leetcodeDivider} />
                    <div className={styles.leetcodeStat}>
                        <span className={styles.leetcodeNum}>Top 0.74%</span>
                        <span className={styles.leetcodeLabel}>Worldwide</span>
                    </div>
                    <div className={styles.leetcodeDivider} />
                    <div className={styles.leetcodeStat}>
                        <span className={styles.leetcodeNum}>#6,013</span>
                        <span className={styles.leetcodeLabel}>
                            Global Rank
                        </span>
                    </div>
                </div>
                <span className={styles.leetcodeArrow}>
                    View Profile &rarr;
                </span>
            </a>
        </section>
    );
}

function StatsBar() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                    <span className={styles.statNum}>25+</span>
                    <span className={styles.statLabel}>Topics</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>8,700+</span>
                    <span className={styles.statLabel}>Lines</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>56</span>
                    <span className={styles.statLabel}>Blog Posts</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>1,700+</span>
                    <span className={styles.statLabel}>Problems Solved</span>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Layout
                title="Interview & CP Notes Lab"
                description="Comprehensive notes for coding interviews, competitive programming, DSA, ML, and web development by Shaurya Singhal."
            >
                <HomepageHeader />
                <LeetCodeBanner />
                <StatsBar />
                <section className={styles.topicsSection}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>
                            What's in the Lab?
                        </h2>
                        <div className={styles.topicsGrid}>
                            {TOPICS.map((topic) => (
                                <TopicCard key={topic.title} {...topic} />
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
            <Analytics />
        </>
    );
}

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Analytics } from "@vercel/analytics/react";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Learn from Notes 📚
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const url = useBaseUrl("/docs/intro");

    React.useEffect(() => {
        window.location.href = url;
    }, []);

    return (
        <>
            <Layout
                title={`Hello from ${siteConfig.title}`}
                description="Description will go into a meta tag in <head />"
            >
                <HomepageHeader />
                <main>
                    <HomepageFeatures />
                </main>
            </Layout>
            <Analytics />
        </>
    );
}

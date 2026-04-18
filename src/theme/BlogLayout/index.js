import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import styles from "./styles.module.css";

export default function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props;

    return (
        <Layout {...layoutProps}>
            <div className={styles.blogWrapper}>
                <aside className={styles.sidebarColumn}>
                    <BlogSidebar sidebar={sidebar} />
                </aside>
                <main className={styles.mainColumn}>
                    <div className={styles.mainInner}>
                        {children}
                    </div>
                </main>
                {toc && (
                    <div className={styles.tocColumn}>
                        {toc}
                    </div>
                )}
            </div>
        </Layout>
    );
}

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Shaurya Singhal",
    tagline:
        "Notes that help you ace Interviews and Competitive Programming.",
    url: "https://notes.jugshaurya.vercel.app/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "jugshaurya",
    projectName: "Notes",

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/jugshaurya/Notes/tree/main",
                    showLastUpdateTime: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/jugshaurya/Notes/tree/main",
                    postsPerPage: "ALL",
                    blogSidebarTitle: "All Posts",
                    blogSidebarCount: "ALL",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: "star_repo",
                content:
                    'If you find these notes helpful, give a <a target="_blank" rel="noopener noreferrer" href="https://github.com/jugshaurya/Notes">star on GitHub</a>!',
                backgroundColor: "#2563eb",
                textColor: "#ffffff",
                isCloseable: true,
            },
            navbar: {
                title: "Shaurya's Notes",
                hideOnScroll: false,
                logo: {
                    alt: "Shaurya Singhal",
                    src: "img/shaurya-bitmoji.jpeg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Notes",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    { to: "/table-of-contents", label: "TOC", position: "left" },
                    {
                        href: "https://shaurya.vercel.app/",
                        label: "Portfolio",
                        position: "right",
                    },
                    {
                        href: "https://github.com/jugshaurya/Notes",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Notes",
                        items: [
                            {
                                label: "All Notes",
                                to: "/docs/intro",
                            },
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                        ],
                    },
                    {
                        title: "Connect",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/jugshaurya",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/jugshaurya",
                            },
                            {
                                label: "LinkedIn",
                                href: "https://www.linkedin.com/in/jugshaurya/",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Portfolio",
                                href: "https://shaurya.vercel.app/",
                            },
                            {
                                label: "Email",
                                href: "mailto:shauryasinghal84@gmail.com",
                            },
                        ],
                    },
                ],
                copyright: `Copyright \u00A9 ${new Date().getFullYear()} Shaurya Singhal. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["bash", "json", "python"],
            },
            colorMode: {
                defaultMode: "dark",
                respectPrefersColorScheme: true,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 4,
            },
        }),
};

module.exports = config;

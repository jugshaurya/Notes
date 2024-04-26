// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Shaurya Singhal 🇮🇳",
    tagline:
        "Notes that helps you in Interviews and in Competitive Programming.",
    url: "https://notes.jugshaurya.vercel.app/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "shaurya", // Usually your GitHub org/user name.
    projectName: "Showcase Notes", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/jugshaurya/Notes/tree/main",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/jugshaurya/Notes/tree/main/docs",
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
            navbar: {
                title: "Shaurya Showcase",
                logo: {
                    alt: "My Site Logo",
                    src: "img/shaurya-bitmoji.jpeg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Go to Notes",
                    },
                    { to: "/blog", label: "Go to Blogs", position: "left" },
                    {
                        href: "https://github.com/jugshaurya/notes",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Notes",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Github",
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
                                label: "View my Portfolio",
                                to: "https://jugshaurya.vercel.app/",
                            },
                            {
                                label: "Mail me: shauryasinghal84@gmail.com",
                                href: "mailto:shauryasinghal84@gmail.com",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Shaurya Showcase. 💟 Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;

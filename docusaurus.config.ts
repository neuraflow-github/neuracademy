import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "neurapolis",
    tagline: "neurapolis Kundendokumentation",
    favicon: "img/neurapolis-favicon.png",

    future: {
        v4: true,
    },

    url: "https://docs.neuraflow.de",
    baseUrl: "/",

    organizationName: "neuraflow-github",
    projectName: "neuracademy",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "de",
        locales: ["de"],
    },

    markdown: {
        format: "detect",
    },

    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            {
                hashed: true,
                docsRouteBasePath: "/",
                indexBlog: false,
                language: ["en", "de"],
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    path: "docs",
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/",
                },
                pages: {
                    path: "src/pages",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: "neurapolis",
            logo: {
                alt: "neurapolis",
                src: "img/neurapolis-logo.svg",
            },
            items: [],
        },
        footer: {
            style: "dark",
            copyright: `Mit ❤️ aus Bremerhaven — © ${new Date().getFullYear()} <a href="https://neuraflow.de" target="_blank">neuraflow</a>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

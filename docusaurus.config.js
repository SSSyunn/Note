// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { sidebarItem } from './sidebarItem.js';
import { footerLinks } from './footerLinks.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '瞬のノート',
  tagline: 'Swimming in the ocean of knowledge',
  favicon: 'img/favicon.png',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://note.syunn.cn',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'SSSyunn', // Usually your GitHub org/user name.
  projectName: 'Note', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '瞬のノート',
        logo: {
          alt: '瞬のノート',
          src: 'img/favicon.png',
        },
        items: sidebarItem,
      },
      footer: {
        style: 'dark',
        links: footerLinks,
        copyright: `Copyright © ${new Date().getFullYear()} By Syunn`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

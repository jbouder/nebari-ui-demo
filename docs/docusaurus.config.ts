import path from 'path';
import {themes as prismThemes} from 'prism-react-renderer';
import tailwindcss from '@tailwindcss/postcss';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Nebari UI',
  tagline: 'Docs & live demos for the Nebari design system',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://nebari-dev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nebari-dev', // Usually your GitHub org/user name.
  projectName: 'nebari-ui-demo', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nebari-dev/nebari-ui-demo/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nebari-dev/nebari-ui-demo/tree/main/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tailwind.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function nebariPlugin(context) {
      return {
        name: 'nebari-design-system',
        // Run Tailwind v4 through Docusaurus's PostCSS pipeline so the Nebari
        // design-system components can render (see src/css/tailwind.css).
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindcss);
          return postcssOptions;
        },
        // Map the `@/` alias (used by components pulled from the @nebari shadcn
        // registry) to the docs `src/` directory, mirroring components.json.
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@': path.resolve(context.siteDir, 'src'),
              },
            },
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nebari UI',
      logo: {
        alt: 'Nebari UI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nebari-dev/nebari-design',
          label: 'Design System',
          position: 'right',
        },
        {
          href: 'https://github.com/nebari-dev/nebari-ui-demo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Nebari',
          items: [
            {
              label: 'Design System',
              href: 'https://github.com/nebari-dev/nebari-design',
            },
            {
              label: 'Nebari',
              href: 'https://www.nebari.dev/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nebari-dev/nebari-ui-demo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nebari. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

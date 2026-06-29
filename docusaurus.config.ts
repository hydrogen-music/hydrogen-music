import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hydrogen',
  tagline: 'The advanced drum machine',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'http://hydrogen-music.org',
  baseUrl: '/',

  organizationName: 'hydrogen-music',
  projectName: 'hydrogen-music',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
        direction: 'ltr',
      },
      it: {
        label: 'Italiano',
        htmlLang: 'it-IT',
        direction: 'ltr',
      },
    },
  },

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en', 'fr', 'it'],
        searchResultLimits: 8,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hydrogen-music/hydrogen-music/edit/main/',
          routeBasePath: '/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/hydrogen-music/hydrogen-music/edit/main/',
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hydrogen',
      logo: {
        alt: 'Hydrogen Logo',
        src: 'img/icon48.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/downloads', label: 'Downloads', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {to: '/screenshots', label: 'Screenshots', position: 'left'},
        {to: '/devzone', label: 'Dev Zone', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://github.com/hydrogen-music/hydrogen/discussions" style="margin-left: 1rem;">Forum</a>',
        },
        {
          href: 'https://github.com/hydrogen-music/hydrogen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Hydrogen Dev Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

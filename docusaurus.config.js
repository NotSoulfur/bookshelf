import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Bookshelf',
  tagline: 'The performance wiki for Pojavlauncher',
  favicon: 'img/pojav.ico',
  url: 'https://github.com',
  baseUrl: '/bookshelf/',
  organizationName: 'Soulfur',
  projectName: 'bookshelf',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/soulfur/bookshelf/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Bookshelf',
      logo: {
        alt: 'Pojav',
        src: 'img/pojav.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Get Started',
        },
        {
          href: 'https://github.com/notsoulfur/bookshelf',
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
              label: 'Get Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/mD9pmHwvC4',
            },
            {
              label: 'X',
              href: 'https://x.com/plaunchteam',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/notsoulfur/bookshelf',
            },
          ],
        },
      ],
      copyright: `Powered by Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
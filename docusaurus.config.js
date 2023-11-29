/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'itcHUB OS',
  tagline: 'itcHUB docs.',
  url: 'https://kubevela.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons/favicon.ico',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh','en','ru'],
    path:'i18n',
    localeConfigs: {
      zh: {
        label: '简体中文',
        direction:'ltr',
        htmlLang: 'zh-CN'
      },
      en: {
        label: 'English',
        direction:'ltr',
        htmlLang: 'en-US'
      },
      ru: {
        label: 'Pусский',
        direction:'ltr',
        htmlLang: 'ru'
      }
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
         language: ["en", "zh","ru"],
        // ```
      }),
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'start',
      content: 'itcHUB start',
    },
  
    navbar: {
      title: 'itcHUB',
      logo: {
        alt: 'Ihub Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
      },
      items: [     
        {
          to: 'docs/getting-started/test',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
      ],
    },
    footer: {
      copyright: `
        <span> Copyright ©Guangdong Baolun Electronics Co., Ltd. </a></span>
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['cue', 'powershell'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        gtag: {
          trackingID: 'G-5GLR1Y52M7',
          anonymizeIP: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './src/plugins/faviconCustomPlugin',
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  scripts: [
    {
      src: '/custom.js',
      async: true,
    },
  ],

};

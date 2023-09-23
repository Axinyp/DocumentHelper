/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "itcHUB OS",
  "tagline": "itcHUB docs.",
  "url": "https://kubevela.io",
  "baseUrl": "/en/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicons/favicon.ico",
  "i18n": {
    "defaultLocale": "zh",
    "locales": [
      "zh",
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {
      "zh": {
        "label": "简体中文",
        "direction": "ltr",
        "htmlLang": "zh-CN"
      },
      "en": {
        "label": "English",
        "direction": "ltr",
        "htmlLang": "en-US"
      }
    }
  },
  "themes": [
    [
      "E:\\广州保伦电子\\DocumentHelper\\node_modules\\@easyops-cn\\docusaurus-search-local\\dist\\server\\server\\index.js",
      {
        "hashed": true,
        "language": [
          "en",
          "zh"
        ]
      }
    ]
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "start",
      "content": "itcHUB start",
      "isCloseable": true
    },
    "navbar": {
      "title": "itcHUB",
      "logo": {
        "alt": "Ihub Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logoDark.svg"
      },
      "items": [
        {
          "to": "docs/getting-started/test",
          "activeBasePath": "docs",
          "label": "Documentation",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "\n        <span> Copyright ©Guangdong Baolun Electronics Co., Ltd. </a></span>\n      ",
      "style": "light",
      "links": []
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "cue",
        "powershell"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "zoom": {
      "selector": ".markdown :not(em) > img",
      "config": {
        "background": {
          "light": "rgb(255, 255, 255)",
          "dark": "rgb(50, 50, 50)"
        }
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "E:\\广州保伦电子\\DocumentHelper\\sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "includeCurrentVersion": true,
          "remarkPlugins": [
            null
          ]
        },
        "gtag": {
          "trackingID": "G-5GLR1Y52M7",
          "anonymizeIP": false
        },
        "theme": {
          "customCss": "E:\\广州保伦电子\\DocumentHelper\\src\\css\\custom.scss"
        }
      }
    ]
  ],
  "plugins": [
    "docusaurus-plugin-sass",
    "./src/plugins/faviconCustomPlugin",
    "E:\\广州保伦电子\\DocumentHelper\\node_modules\\docusaurus-plugin-image-zoom\\src\\index.js"
  ],
  "scripts": [
    {
      "src": "/custom.js",
      "async": true
    }
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};

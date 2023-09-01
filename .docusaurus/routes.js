import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a48'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '008'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '110'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3fb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c14'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2df'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '605'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f91'),
    routes: [
      {
        path: '/docs/client/annotation',
        component: ComponentCreator('/docs/client/annotation', 'bfc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/appmarket',
        component: ComponentCreator('/docs/client/appmarket', '9f1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/filepreviewer',
        component: ComponentCreator('/docs/client/filepreviewer', '5cf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/meetingmode',
        component: ComponentCreator('/docs/client/meetingmode', '237'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/miracast',
        component: ComponentCreator('/docs/client/miracast', 'cc0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/nfc',
        component: ComponentCreator('/docs/client/nfc', 'f4b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/setting',
        component: ComponentCreator('/docs/client/setting', '07e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/singlemode',
        component: ComponentCreator('/docs/client/singlemode', '4cc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/tool',
        component: ComponentCreator('/docs/client/tool', '76a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/troubleshooting',
        component: ComponentCreator('/docs/client/troubleshooting', '4d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/voiceassistance',
        component: ComponentCreator('/docs/client/voiceassistance', '58b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/client/whiteboard',
        component: ComponentCreator('/docs/client/whiteboard', 'e11'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started/test',
        component: ComponentCreator('/docs/getting-started/test', '8aa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/server/login',
        component: ComponentCreator('/docs/server/login', '0b3'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ce3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

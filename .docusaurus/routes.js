import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ru/__docusaurus/debug',
    component: ComponentCreator('/ru/__docusaurus/debug', '975'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/config',
    component: ComponentCreator('/ru/__docusaurus/debug/config', 'e0b'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/content',
    component: ComponentCreator('/ru/__docusaurus/debug/content', '9fc'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/globalData',
    component: ComponentCreator('/ru/__docusaurus/debug/globalData', '392'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/metadata',
    component: ComponentCreator('/ru/__docusaurus/debug/metadata', '9a7'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/registry',
    component: ComponentCreator('/ru/__docusaurus/debug/registry', 'cdd'),
    exact: true
  },
  {
    path: '/ru/__docusaurus/debug/routes',
    component: ComponentCreator('/ru/__docusaurus/debug/routes', '50a'),
    exact: true
  },
  {
    path: '/ru/search',
    component: ComponentCreator('/ru/search', '478'),
    exact: true
  },
  {
    path: '/ru/docs',
    component: ComponentCreator('/ru/docs', 'df8'),
    routes: [
      {
        path: '/ru/docs/client/annotation',
        component: ComponentCreator('/ru/docs/client/annotation', 'ca0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/appmarket',
        component: ComponentCreator('/ru/docs/client/appmarket', '04c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/filepreviewer',
        component: ComponentCreator('/ru/docs/client/filepreviewer', '465'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/meetingmode',
        component: ComponentCreator('/ru/docs/client/meetingmode', '800'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/miracast',
        component: ComponentCreator('/ru/docs/client/miracast', '76f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/nfc',
        component: ComponentCreator('/ru/docs/client/nfc', '6bd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/register',
        component: ComponentCreator('/ru/docs/client/register', '61f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/setting',
        component: ComponentCreator('/ru/docs/client/setting', '583'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/singlemode',
        component: ComponentCreator('/ru/docs/client/singlemode', '1be'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/tool',
        component: ComponentCreator('/ru/docs/client/tool', '2a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/troubleshooting',
        component: ComponentCreator('/ru/docs/client/troubleshooting', '1cf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/voiceassistance',
        component: ComponentCreator('/ru/docs/client/voiceassistance', '400'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/client/whiteboard',
        component: ComponentCreator('/ru/docs/client/whiteboard', 'd8d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/getting-started/test',
        component: ComponentCreator('/ru/docs/getting-started/test', 'e48'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ru/docs/server/login',
        component: ComponentCreator('/ru/docs/server/login', '384'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/ru/',
    component: ComponentCreator('/ru/', '634'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '0d9'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '19f'),
    routes: [
      {
        path: '/en/docs/client/annotation',
        component: ComponentCreator('/en/docs/client/annotation', 'f70'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/appmarket',
        component: ComponentCreator('/en/docs/client/appmarket', '361'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/filepreviewer',
        component: ComponentCreator('/en/docs/client/filepreviewer', 'fc4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/meetingmode',
        component: ComponentCreator('/en/docs/client/meetingmode', '5a8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/miracast',
        component: ComponentCreator('/en/docs/client/miracast', '57f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/nfc',
        component: ComponentCreator('/en/docs/client/nfc', 'aef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/register',
        component: ComponentCreator('/en/docs/client/register', '3e7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/setting',
        component: ComponentCreator('/en/docs/client/setting', 'f72'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/singlemode',
        component: ComponentCreator('/en/docs/client/singlemode', '0c9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/tool',
        component: ComponentCreator('/en/docs/client/tool', '4a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/troubleshooting',
        component: ComponentCreator('/en/docs/client/troubleshooting', '81c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/voiceassistance',
        component: ComponentCreator('/en/docs/client/voiceassistance', 'aa0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/client/whiteboard',
        component: ComponentCreator('/en/docs/client/whiteboard', '71b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/getting-started/test',
        component: ComponentCreator('/en/docs/getting-started/test', 'ced'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/en/docs/server/login',
        component: ComponentCreator('/en/docs/server/login', 'a82'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'ce6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import path from 'path';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PresetEntry } from 'redocusaurus';

const redocusaurus: PresetEntry = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    config: path.join(__dirname, 'redocly.yaml'),
    specs: [
      {
        id: 'using-single-yaml',
        spec: 'openapi/single-file/openapi.yaml',
        route: '/examples/using-single-yaml/',
      },
      {
        id: 'using-multi-file-yaml',
        spec: 'openapi/multi-file/openapi.yaml',
        route: '/examples/using-multi-file-yaml/',
      },
      {
        id: 'using-swagger-json',
        spec: 'openapi/swagger/swagger.json',
        route: '/examples/using-swagger-json/',
      },
      {
        id: 'using-remote-url',
        // Remote File
        spec: 'https://redocly.github.io/redoc/openapi.yaml',
        route: '/examples/using-remote-url/',
      },
      {
        id: 'using-custom-page',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-page/index.jsx')
      },
      {
        id: 'using-custom-layout',
        spec: 'openapi/single-file/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
      {
        id: 'using_eb1a',
        spec: 'openapi/immigration/eb1a/openapi.yaml',
        // NOTE: no `route` passed, instead data used in custom React Component ('custom-layout/index.jsx')
      },
      {
        id: 'using_eb1b',
        spec: 'openapi/immigration/eb1b/openapi.yaml',
      },
      {
        id: 'using_eb1c',
        spec: 'openapi/immigration/eb1c/openapi.yaml',
      },
      {
        id: 'using_eb2-perm',
        spec: 'openapi/immigration/eb2-perm/openapi.yaml',

      },
      {
        id: 'using_eb2-niw',
        spec: 'openapi/immigration/eb2-niw/openapi.yaml',

      },
      {
        id: 'using_eb3',
        spec: 'openapi/immigration/eb3/openapi.yaml',

      },
      {
        id: 'using_eb4',
        spec: 'openapi/immigration/eb4/openapi.yaml',

      },
      {
        id: 'using_eb5',
        spec: 'openapi/immigration/eb5/openapi.yaml',

      },
      {
        id: 'using_f1-immigration',
        spec: 'openapi/immigration/f1-immigration/openapi.yaml',

      },
      {
        id: 'using_f2a-immigration',
        spec: 'openapi/immigration/f2a-immigration/openapi.yaml',

      },
      {
        id: 'using_f2b-immigration',
        spec: 'openapi/immigration/f2b-immigration/openapi.yaml',

      },
      {
        id: 'using_f3-immigration',
        spec: 'openapi/immigration/f3-immigration/openapi.yaml',

      },
      {
        id: 'using_f4-immigration',
        spec: 'openapi/immigration/f4-immigration/openapi.yaml',

      },
// nonimmigration
      {
        id: 'using_b1',
        spec: 'openapi/nonimmigration/b1/openapi.yaml',
      },
      {
        id: 'using_b2',
        spec: 'openapi/nonimmigration/b2/openapi.yaml',
      },
      {
        id: 'using_f1-nonimmigration',
        spec: 'openapi/nonimmigration/f1-nonimmigration/openapi.yaml',
      },
      {
        id: 'using_f2-nonimmigration',
        spec: 'openapi/nonimmigration/f2-nonimmigration/openapi.yaml',
      },
      {
        id: 'using_m1',
        spec: 'openapi/nonimmigration/m1/openapi.yaml',
      },
      {
        id: 'using_m2',
        spec: 'openapi/nonimmigration/m2/openapi.yaml',
      },
      {
        id: 'using_j1',
        spec: 'openapi/nonimmigration/j1/openapi.yaml',
      },
      {
        id: 'using_j2',
        spec: 'openapi/nonimmigration/j2/openapi.yaml',
      },
      {
        id: 'using_h1b',
        spec: 'openapi/nonimmigration/h1b/openapi.yaml',
      },
      {
        id: 'using_h4',
        spec: 'openapi/nonimmigration/h4/openapi.yaml',
      },
      {
        id: 'using_h2a',
        spec: 'openapi/nonimmigration/h2a/openapi.yaml',
      },
      {
        id: 'using_h2b',
        spec: 'openapi/nonimmigration/h2b/openapi.yaml',
      },
      {
        id: 'using_h3',
        spec: 'openapi/nonimmigration/h3/openapi.yaml',
      },
      {
        id: 'using_l1',
        spec: 'openapi/nonimmigration/l1/openapi.yaml',
      },
      {
        id: 'using_l2',
        spec: 'openapi/nonimmigration/l2/openapi.yaml',
      },
      {
        id: 'using_01a',
        spec: 'openapi/nonimmigration/01a/openapi.yaml',
      },
      {
        id: 'using_01b',
        spec: 'openapi/nonimmigration/01b/openapi.yaml',
      },
      {
        id: 'using_p1',
        spec: 'openapi/nonimmigration/p1/openapi.yaml',
      },
      {
        id: 'using_q1',
        spec: 'openapi/nonimmigration/q1/openapi.yaml',
      },
      {
        id: 'using_k1',
        spec: 'openapi/nonimmigration/k1/openapi.yaml',
      },
      {
        id: 'using_k3',
        spec: 'openapi/nonimmigration/k3/openapi.yaml',
      },
      {
        id: 'using_u',
        spec: 'openapi/nonimmigration/u/openapi.yaml',
      },
      {
        id: 'using_t',
        spec: 'openapi/nonimmigration/t/openapi.yaml',
      },
      {
        id: 'using_v',
        spec: 'openapi/nonimmigration/v/openapi.yaml',
      },
      {
        id: 'using_a',
        spec: 'openapi/nonimmigration/a/openapi.yaml',
      },
      {
        id: 'using_nato',
        spec: 'openapi/nonimmigration/nato/openapi.yaml',
      },
      {
        id: 'using_c1',
        spec: 'openapi/nonimmigration/c1/openapi.yaml',
      },
      {
        id: 'using_c2',
        spec: 'openapi/nonimmigration/c2/openapi.yaml',
      },
      {
        id: 'using_c3',
        spec: 'openapi/nonimmigration/c3/openapi.yaml',
      },
      {
        id: 'using_e1',
        spec: 'openapi/nonimmigration/e1/openapi.yaml',
      },
      {
        id: 'using_e2',
        spec: 'openapi/nonimmigration/e2/openapi.yaml',
      },
      {
        id: 'using_e3',
        spec: 'openapi/nonimmigration/e3/openapi.yaml',
      },
      {
        id: 'using_r1',
        spec: 'openapi/nonimmigration/r1/openapi.yaml',
      },
      {
        id: 'using_r2',
        spec: 'openapi/nonimmigration/r2/openapi.yaml',
      },
    ],
    theme: {
      /**
       * Highlight color for docs
       */
      primaryColor: '#1890ff',
    },
  },
];

if (process.env.VERCEL_URL) {
  process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
}

const config: Config = {
  title: 'Redocusaurus',
  tagline: 'OpenAPI solution for Docusaurus docs with Redoc',
  customFields: {
    meta: {
      description: 'Integrate Redoc easily into your Docusaurus Site',
    },
  },
  url: process.env.DEPLOY_PRIME_URL || 'http://localhost:5000', // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || '/', // Base URL for your project */
  favicon: 'img/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          routeBasePath: '/docs',
          editUrl:
            'https://github.com/rohit-gohri/redocusaurus/edit/main/website/',
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus Config
    redocusaurus,
  ],
  themeConfig: {
    navbar: {
      title: 'Redocusaurus',
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: '/docs',
        },
        {
          label: 'Examples',
          position: 'left',
          items: [
            {
              label: 'All',
              to: '/examples',
            },
            {
              label: 'Using Single YAML',
              to: '/examples/using-single-yaml/',
            },
            {
              label: 'Using Remote URL',
              to: '/examples/using-remote-url/',
            },
            {
              label: 'Using Multiple YAMLs',
              to: '/examples/using-multi-file-yaml/',
            },
            {
              label: 'Using Swagger',
              to: '/examples/using-swagger-json/',
            },
            {
              label: 'Custom Page',
              to: '/examples/custom-page/',
            },
            {
              label: 'Custom Layout',
              to: '/examples/custom-layout/',
            },
            {
              label: 'Client Only',
              to: '/examples/client-only/',
            },
          ],
        },
        {
          label: 'v1+',
          position: 'right',
          items: [
            {
              label: 'v0',
              href: 'https://redocusaurus-v0.vercel.app/',
            },
            {
              label: 'v1+',
              href: 'https://redocusaurus.vercel.app',
            },
          ],
        },
        {
          href: 'https://github.com/rohit-gohri/redocusaurus',
          position: 'right',
          className: 'header-github-logo',
          'aria-label': 'GitHub Repo',
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: 'Redocusaurus Logo',
      //   src: 'img/logoDark.png',
      // },
      style: 'dark',
      links: [
        {
          title: 'NPM Modules',
          items: [
            {
              label: 'Redocusaurus',
              href: 'https://www.npmjs.com/package/redocusaurus/',
            },
            {
              label: 'Docusaurus Theme Redoc',
              href: 'https://www.npmjs.com/package/docusaurus-theme-redoc/',
            },
            {
              label: 'Docusaurus Plugin Redoc',
              href: 'https://www.npmjs.com/package/docusaurus-plugin-redoc/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/rohit-gohri/redocusaurus/',
            },
            {
              label: 'Blog Post',
              href: 'https://rohit.page/blog/projects/openapi-for-docusaurus/',
            },
            {
              label: 'Twitter Discussion',
              href: 'https://twitter.com/rohit_gohri/status/1351589213565644801',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://rohit.page" target="_blank" rel="noopener noreferrer">Rohit Gohri</a>. Built with <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">Docusaurus</a>`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

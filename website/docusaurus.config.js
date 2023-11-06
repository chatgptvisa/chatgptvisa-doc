const  path = require('path');

/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
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

/**
 * @type {Partial<import('@docusaurus/types').DocusaurusConfig>}
 */
const config = {
  presets: [
    /** ************ Your other presets' config  *********** */
    [
      '@docusaurus/preset-classic',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve('./src/custom.css')] },
        docs: {
          routeBasePath: '/docs',
          editUrl: 'https://github.com/rohit-gohri/redocusaurus/edit/main/website/',
        },
      },  
    ],
    // Redocusaurus Config
    redocusaurus,
  ],
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
  themeConfig: {
    navbar: {
      title: 'Redocusaurus',
      items: [
        {
          label: 'Immigration',
          position: 'left',
          to: '/docs',
          items: [
            {
              label: 'EB1A',
              to: '/immigration/eb1a/'
            },
            {
              label: 'EB1B',
              to: '/immigration/eb1b/',
            },
            {
              label: 'EB1C',
              to: '/immigration/eb1c/',
            },
            {
              label: 'EB2-PERM',
              to: '/immigration/eb2-perm/',
            },
            {
              label: 'EB2-NIW',
              to: '/immigration/eb2-niw/',
            },
            {
              label: 'EB3',
              to: '/immigration/eb3/',
            },
            {
              label: 'EB4',
              to: '/immigration/eb4/',
            },
            {
              label: 'EB5',
              to: '/immigration/eb5/',
            },
            {
              label: 'F1-immigration',
              to: '/immigration/f1-immigration/',
            },
            {
              label: 'F2A-immigration',
              to: '/immigration/f2a-immigration/',
            },
            {
              label: 'F2B-immigration',
              to: '/immigration/f2b-immigration/',
            },
            {
              label: 'F3-immigration',
              to: '/immigration/f3-immigration/',
            },
            {
              label: 'F4-immigration',
              to: '/immigration/f4-immigration/',
            }
          ],
        },
        {
          label: 'NonImmigration',
          position: 'left',
          items: [
            {
              label: 'B1',
              to: '/nonimmigration/b1/',
            },
            {
              label: 'B2',
              to: '/nonimmigration/b2/',
            },
            {
              label: 'F1',
              to: '/nonimmigration/f1-nonimmigration/',
            },
            {
              label: 'F2',
              to: '/nonimmigration/f2-nonimmigration',
            },
            {
              label: 'M1',
              to: '/nonimmigration/m1/',
            },
            {
              label: 'M2',
              to: '/nonimmigration/m2/',
            },
            {
              label: 'J1',
              to: '/nonimmigration/j1/',
            },
            {
              label: 'J2',
              to: '/nonimmigration/j2/',
            },
            {
              label: 'H1B',
              to: '/nonimmigration/h1b/',
            },
            {
              label: 'H4',
              to: '/nonimmigration/h4/',
            },
            {
              label: 'H2A',
              to: '/nonimmigration/h2a/',
            },
            {
              label: 'H2B',
              to: '/nonimmigration/h2b/',
            },
            {
              label: 'H3',
              to: '/nonimmigration/h3/',
            },
            {
              label: 'L1',
              to: '/nonimmigration/l1/',
            },
            {
              label: 'L2',
              to: '/nonimmigration/l2/',
            },
            {
              label: 'O1A',
              to: '/nonimmigration/01a/',
            },
            {
              label: 'O1B',
              to: '/nonimmigration/01b/',
            },
            {
              label: 'P1',
              to: '/nonimmigration/p1/',
            },
            {
              label: 'Q1',
              to: '/nonimmigration/q1/',
            },
            {
              label: 'K1',
              to: '/nonimmigration/k1/',
            },
            {
              label: 'K3',
              to: '/nonimmigration/k3/',
            },
            {
              label: 'U',
              to: '/nonimmigration/u/',
            },
            {
              label: 'T',
              to: '/nonimmigration/t/',
            },
            {
              label: 'V',
              to: '/nonimmigration/v/',
            },
            {
              label: 'A',
              to: '/nonimmigration/a/',
            },
            {
              label: 'NATO',
              to: '/nonimmigration/nato/',
            },
            {
              label: 'C1',
              to: '/nonimmigration/c1/',
            },
            {
              label: 'C2',
              to: '/nonimmigration/c2/',
            },
            {
              label: 'C3',
              to: '/nonimmigration/c3/',
            },
            {
              label: 'E1',
              to: '/nonimmigration/e1/',
            },
            {
              label: 'E2',
              to: '/nonimmigration/e2/',
            },
            {
              label: 'E3',
              to: '/nonimmigration/e3/',
            },
            {
              label: 'R1',
              to: '/nonimmigration/r1/',
            },
            {
              label: 'R2',
              to: '/nonimmigration/r2/',
            },

          ],
        },
       
        {
          label: 'v1',
          position: 'right',
          items: [
            {
              label: 'v0',
              href: 'https://redocusaurus-v0.vercel.app/',
            },
            {
              label: 'v1',
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
  },
};

module.exports = config;

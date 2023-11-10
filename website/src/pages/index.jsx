import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const sections = [
  {
    title: <>🗽 US Immigration Guides</>,
    description: (
      <>Detailed guides and resources to navigate the US immigration process.</>
    ),
  },
  {
    title: <>📜 Visa Categories Explained</>,
    description: (
      <>
        Comprehensive explanations of various US visa categories, eligibility, and application procedures.
      </>
    ),
  },
  {
    title: <>🛂 Visa Application Tips</>,
    description: (
      <>Practical tips and best practices for a successful US visa application.</>
    ),
  },
  {
    title: <>🔗 Useful Links & Resources</>,
    description: (
      <>
        A curated list of official links and helpful resources for prospective US immigrants.
      </>
    ),
  },
];


/**
 *
 * @param {{
 *   title: string | React.ReactNode;
 *   description: string | React.ReactNode;
 *   link?: string;
 * }} param0
 */
function Section({ title, description, link }) {
  const sectionComponent = <h3>{title}</h3>;
  const fullLink = useBaseUrl(link);
  return (
    <div className={clsx('col col--6', styles.feature, styles.featuresCol)}>
      {link ? <Link to={fullLink}>{sectionComponent}</Link> : sectionComponent}
      <p>{description}</p>
    </div>
  );
}

function Docs() {
  return (
    <Layout title="Redocusaurus" description="OpenAPI documentation solution">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Redocusaurus</h1>
          <p>OpenAPI solution for Docusaurus docs using Redoc</p>
          <span>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=rohit-gohri&amp;repo=redocusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </header>
      <main>
        {sections && sections.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {sections.map((props, idx) => (
                  <Section key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Docs;

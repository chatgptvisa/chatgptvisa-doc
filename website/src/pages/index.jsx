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

function VisaInfo() {
  return (
    <Layout title="US Visa Information Hub" description="Comprehensive guides and resources for US immigration">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">US Visa Information Hub</h1>
          <p>A one-stop resource for all your US immigration and visa information needs.</p>
          <span>
            {/* Ensure this GitHub button is linked to a repository that offers additional resources or code for managing immigration documents */}
            <iframe
              src="https://github.com/chatgptvisa&repo=chatgptvisa-doc&type=star&count=true&size=large"
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

export default VisaInfo;

import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description={siteConfig.tagline}>
      <main className="container margin-vert--lg">
        <div className="padding-vert--md text--center">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="margin-vert--lg">
            <Link
              className="button button--primary button--lg margin-hr--sm"
              to="/downloads">
              Download
            </Link>
            <Link
              className="button button--secondary button--lg margin-hr--sm"
              to="/docs">
              Documentation
            </Link>
            <Link
              className="button button--outline button--lg margin-hr--sm"
              to="/features">
              Features
            </Link>
          </div>
        </div>
        <hr />
        <div className="margin-vert--lg">
          <Heading as="h2">Latest News</Heading>
          <p>Check our <Link to="/blog">blog</Link> for the latest releases and updates.</p>
        </div>
      </main>
    </Layout>
  );
}

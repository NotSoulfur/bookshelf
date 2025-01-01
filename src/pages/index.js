import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import MDXContent from '@site/src/pages/markdown-page.md';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="A wiki for getting the most performance for Pojavlauncher">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/intro">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.centerContent}>
        <div className={styles.markdownContent}>
          <MDXContent />
        </div>
      </main>
    </Layout>
  );
}
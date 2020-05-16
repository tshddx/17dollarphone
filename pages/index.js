import Head from 'next/head';

import styles from './index.module.scss';

import Stack from '../components/Stack';
import Header from '../components/Header';
import Features from '../components/Features';
import Share from '../components/Share';
import Footer from '../components/Footer';

const Home = () => (
  <div className={styles.outer}>
    <div className={styles.inner}>
      <Head>
        <title>$17 Phone</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Stack gap={3}>
        <Stack gap={2}>
          <Header />
          <Features />
        </Stack>
        <Share />
      </Stack>
    </div>
    <Footer />
  </div>
);

export default Home;

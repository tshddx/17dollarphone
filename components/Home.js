import Head from 'next/head';

import styles from './Home.module.scss';

import Stack from './Stack';
import Header from './Header';
import Features from './Features';
import Share from './Share';
import Footer from './Footer';

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

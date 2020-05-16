import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.pretitle}>Made by</div>
          <a
            className={styles.link}
            href="https://twitter.com/baddox"
            target="_blank"
          >
            Thomas Shaddox
          </a>
        </div>
        <div>
          <div className={styles.pretitle}>Inspired by</div>
          <a
            className={styles.link}
            href="https://twitter.com/MKBHD/status/1261315329604702211"
            target="_blank"
          >
            MKBHD's tweet
          </a>
        </div>
        <div>
          <div className={styles.pretitle}>Source code</div>
          <a
            className={styles.link}
            href="https://github.com/baddox/17dollarphone"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

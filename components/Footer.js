import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div class="pretitle">Made by</div>
          <a
            className={styles.link}
            href="https://twitter.com/baddox"
            target="_blank"
          >
            Thomas Shaddox
          </a>
        </div>
        <div>
          <div class="pretitle">Inspired by</div>
          <a
            className={styles.link}
            href="https://twitter.com/MKBHD/status/1261315329604702211"
            target="_blank"
          >
            MKBHD's tweet
          </a>
        </div>
        <div>
          <div class="pretitle">Source code</div>
          <a className={styles.link} href="https://github.com" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

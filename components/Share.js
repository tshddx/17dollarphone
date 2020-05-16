import React from 'react';
import classnames from 'classnames';
import Stack from './Stack';
import styles from './Share.module.scss';

const Share = ({}) => {
  return (
    <Stack gap={2} center>
      <h2 className={styles.heading}>Share Your $17 Phone</h2>
      <div className={styles.buttons}>
        <button className={classnames(styles.button, styles.twitterButton)}>
          Share on Twitter
        </button>
        <button className={classnames(styles.button, styles.copyUrlButton)}>
          Copy URL
        </button>
      </div>
    </Stack>
  );
};

export default Share;

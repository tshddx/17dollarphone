import React from 'react';
import Stack from './Stack';
import styles from './Header.module.scss';

const Header = ({}) => {
  return (
    <Stack gap={2}>
      <div className={styles.inline}>
        <div>
          You have<strong className={styles.h1}> $17 </strong>
        </div>
        <div> to make the best budget phone.</div>
      </div>
      <div>
        <div>
          An <strong>excellent</strong> feature costs $5.
        </div>
        <div>
          An <strong>average</strong> feature costs $3.
        </div>
        <div>
          A <strong>poor</strong> feature costs $1.
        </div>
      </div>
    </Stack>
  );
};

export default Header;

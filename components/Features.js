import React from 'react';
import { FEATURES, OPTIONS } from '../utils/features';
import Stack from './Stack';
import styles from './Features.module.scss';

const Features = ({}) => {
  return (
    <Stack gap={2}>
      <div>
        <div>
          You have <strong>$17</strong> left to spend.
        </div>
        <div>Spend wisely on these 7 features:</div>
      </div>
      <div className={styles.grid}>
        {FEATURES.map(({ name, emoji, dollars }) => {
          return (
            <>
              <div className={styles.name}>
                <span className={styles.emoji}>{emoji}</span>
                <span>{name}</span>
              </div>
              {OPTIONS.map(({ dollars }) => {
                return (
                  <div key={dollars} className={styles.option}>
                    ${dollars}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </Stack>
  );
};

export default Features;

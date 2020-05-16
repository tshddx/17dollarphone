import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import {
  FEATURES,
  OPTIONS,
  getDefaultSelectedFeatures,
  updateSelectedFeatures,
  makePath,
  parsePath,
} from '../utils/features';
import Stack from './Stack';
import styles from './Features.module.scss';

const Features = ({}) => {
  // const [selectedFeatures, _setSelectedFeatures] = React.useState(
  //   getDefaultSelectedFeatures
  // );
  const router = useRouter();
  console.log('query', router.query);
  const selectedFeatures = router.query.features
    ? parsePath(router.query.features)
    : getDefaultSelectedFeatures();
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
            <React.Fragment key={name}>
              <div className={styles.name}>
                <span className={styles.emoji}>{emoji}</span>
                <span>{name}</span>
              </div>
              {OPTIONS.map(({ dollars }) => {
                const isSelected = selectedFeatures[name] === dollars;
                const newSelectedFeatures = updateSelectedFeatures(
                  selectedFeatures,
                  name,
                  isSelected ? null : dollars
                );
                const path = makePath(newSelectedFeatures);
                return (
                  <Link key={dollars} href="/[features]" as={`/${path}`}>
                    <a
                      className={classnames(styles.option, {
                        [styles.selected]: isSelected,
                      })}
                    >
                      ${dollars}
                    </a>
                  </Link>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </Stack>
  );
};

export default Features;

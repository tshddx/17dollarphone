import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import {
  FEATURES,
  OPTIONS,
  getDefaultSelectedFeatures,
  selectedFeaturesStats,
  updateSelectedFeatures,
  makePath,
  parsePath,
} from '../utils/features';
import Stack from './Stack';
import styles from './Features.module.scss';

const Features = ({}) => {
  const router = useRouter();
  const selectedFeatures = router.query.features
    ? parsePath(router.query.features)
    : getDefaultSelectedFeatures();
  const stats = selectedFeaturesStats(selectedFeatures);
  let message1 = (
    <>
      You have <strong>${stats.remainingDollars}</strong> left to spend.{' '}
    </>
  );
  let message2 = 'Spend wisely on these 7 features:';
  if (stats.remainingDollars === 0) {
    const firstMissingFeature = FEATURES.find(
      (feature) => selectedFeatures[feature.name] === null
    );
    message1 = firstMissingFeature
      ? `You're out of money!`
      : 'This looks like a great budget phone!';
    message2 = firstMissingFeature
      ? firstMissingFeature.missingSentence
      : 'Share it with a friend!';
  }
  return (
    <Stack gap={2}>
      <div>
        <div>{message1}</div>
        <div>{message2}</div>
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
                const isDisabled = newSelectedFeatures === null;
                if (isDisabled) {
                  return (
                    <div
                      key={dollars}
                      className={classnames(styles.option, styles.disabled)}
                    >
                      ${dollars}
                    </div>
                  );
                }
                const path = makePath(newSelectedFeatures);
                return (
                  <Link
                    key={dollars}
                    href={path === '' ? '/' : '/[features]'}
                    as={`/${path}`}
                    prefetch={false}
                    scroll={false}
                  >
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

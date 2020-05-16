import React from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Stack from './Stack';
import styles from './Share.module.scss';
import {
  FEATURES,
  OPTIONS,
  getDefaultSelectedFeatures,
  selectedFeaturesStats,
  updateSelectedFeatures,
  makePath,
  parsePath,
  makeSentence,
} from '../utils/features';

const Share = ({}) => {
  const [copied, setCopied] = React.useState(false);
  const router = useRouter();
  console.log('query', router);
  const selectedFeatures = router.query.features
    ? parsePath(router.query.features)
    : getDefaultSelectedFeatures();
  const stats = selectedFeaturesStats(selectedFeatures);
  const sentence = makeSentence(selectedFeatures);
  console.log(sentence);
  const url = `https://17dollarphone.com${router.asPath}`;
  return (
    <Stack gap={2} center>
      <h2 className={styles.heading}>Share Your $17 Phone</h2>
      <div className={styles.buttons}>
        <a
          href={`https://twitter.com/intent/tweet?text=${sentence}&url=${url}&hashtags=My17DollarPhone`}
          target="_blank"
          className={classnames(styles.button, styles.twitterButton)}
        >
          Share on Twitter
        </a>
        <CopyToClipboard
          text={url}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        >
          <button className={classnames(styles.button, styles.copyUrlButton)}>
            {copied ? `Copied!` : `Copy URL`}
          </button>
        </CopyToClipboard>
      </div>
    </Stack>
  );
};

export default Share;

import React from 'react';
import { FEATURES, OPTIONS } from '../utils/features';
import Stack from './Stack';

const Features = ({}) => {
  return (
    <Stack gap={2}>
      <div>
        <div>
          You have <strong>$17</strong> left to spend.
        </div>
        <div>Spend wisely on these 7 features:</div>
      </div>
      {FEATURES.map(({ name, emoji, dollars }) => {
        return (
          <>
            <div>
              <div>{emoji}</div>
              <div>{name}</div>
            </div>
            {OPTIONS.map(({ dollars }) => {
              return <div id={dollars}>${dollars}</div>;
            })}
          </>
        );
      })}
    </Stack>
  );
};

export default Features;

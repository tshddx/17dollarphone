import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Stack.module.scss';

const Stack = ({ gap = 2, center = false, children }) => {
  return (
    <div className={classnames(styles.stack, { [styles.center]: center })}>
      {React.Children.map(children, (child) =>
        child !== null && child !== undefined ? (
          <div
            className={classnames(
              styles.stackChild,
              styles[`stackChildGap${gap}`]
            )}
          >
            {child}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Stack;

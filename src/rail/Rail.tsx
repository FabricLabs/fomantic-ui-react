import React from 'react';
import { RailProps } from './type';

const Rail = ({
  as = 'div',
  className,
  position,
  internal,
  dividing,
  attached,
  close,
  content,
  children,
  ...props
}: RailProps) => {
  const classNames = ['ui', position, 'rail'];

  if (internal) {
    classNames.push('internal');
  }

  if (dividing) {
    classNames.push('dividing');
  }

  if (attached) {
    classNames.push('attached');
  }

  if (close) {
    classNames.push('close');
    if (typeof close === 'string') {
      classNames.push(close);
    }
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Rail.displayName = 'Rail';

export default Rail;

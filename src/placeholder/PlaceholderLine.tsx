import React from 'react';
import { PlaceholderLineProps } from './type';

const PlaceholderLine = ({ as = 'div', className, length, ...props }: PlaceholderLineProps) => {
  const classNames = ['line'];

  if (length) {
    classNames.push(length);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props });
};

PlaceholderLine.displayName = 'PlaceholderLine';

export default PlaceholderLine;

import React from 'react';
import { TextProps } from './type';

const Text = ({ as = 'span', className, color, size, content, children, ...props }: TextProps) => {
  const classNames = ['ui', 'text'];

  if (color) {
    classNames.push(color);
  }

  if (size) {
    classNames.push(size);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Text.displayName = 'Text';

export default Text;

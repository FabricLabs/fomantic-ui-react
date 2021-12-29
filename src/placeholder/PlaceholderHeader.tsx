import React from 'react';
import { PlaceholderHeaderProps } from './type';

const PlaceholderHeader = ({ as = 'div', className, image, content, children, ...props }: PlaceholderHeaderProps) => {
  const classNames = ['header'];

  if (image) {
    classNames.push('image');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

PlaceholderHeader.displayName = 'PlaceholderHeader';

export default PlaceholderHeader;

import React from 'react';
import { PlaceholderImageProps } from './type';

const PlaceholderImage = ({ as = 'div', className, ...props }: PlaceholderImageProps) => {
  const classNames = ['image'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props });
};

PlaceholderImage.displayName = 'PlaceholderImage';

export default PlaceholderImage;

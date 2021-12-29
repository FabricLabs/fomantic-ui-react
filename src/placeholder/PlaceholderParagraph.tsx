import React from 'react';
import { PlaceholderParagraphProps } from './type';

const PlaceholderParagraph = ({ as = 'div', className, content, children, ...props }: PlaceholderParagraphProps) => {
  const classNames = ['paragraph'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

PlaceholderParagraph.displayName = 'PlaceholderParagraph';

export default PlaceholderParagraph;

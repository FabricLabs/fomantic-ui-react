import React from 'react';
import PlaceholderHeader from './PlaceholderHeader';
import PlaceholderImage from './PlaceholderImage';
import PlaceholderLine from './PlaceholderLine';
import PlaceholderParagraph from './PlaceholderParagraph';
import { PlaceholderProps } from './type';

const Placeholder = ({ as = 'div', className, content, children, ...props }: PlaceholderProps) => {
  const classNames = ['ui', 'placeholder'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Placeholder.displayName = 'Placeholder';
Placeholder.Line = PlaceholderLine;
Placeholder.Header = PlaceholderHeader;
Placeholder.Image = PlaceholderImage;
Placeholder.Paragraph = PlaceholderParagraph;

export default Placeholder;

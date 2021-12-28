import React from 'react';
import { SegmentInlineProps } from './type';

const SegmentInline = ({ as = 'div', className, content, children, ...props }: SegmentInlineProps) => {
  const classNames = ['inline'];

  if (className) {
    classNames.push(className);
  }

  if (as === '') {
    as = 'div';
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

SegmentInline.displayName = 'SegmentInline';

export default SegmentInline;

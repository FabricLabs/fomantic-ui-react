import React from 'react';
import { SegmentGroupProps } from './type';

const SegmentGroup = ({ as = 'div', className, basic, content, children, ...props }: SegmentGroupProps) => {
  const classNames = ['ui', 'segments'];

  if (basic) {
    classNames.push('basic');
  }

  if (className) {
    classNames.push(className);
  }

  if (!as) {
    as = 'div';
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

SegmentGroup.displayName = 'SegmentGroup';

export default SegmentGroup;

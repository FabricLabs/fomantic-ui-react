import React, { createElement } from 'react';
import { SegmentProps } from './type';
import SegmentInline from './SegmentInline';
import SegmentGroup from './SegmentGroup';

const Segment = ({
  as = 'div',
  className,
  placeholder,
  raised,
  stacked,
  piled,
  color,
  secondary,
  content,
  children,
  ...props
}: SegmentProps) => {
  const classNames = ['ui', 'segment'];

  if (placeholder) {
    classNames.push('placeholder');
  }

  if (raised) {
    classNames.push('raised');
  }

  if (stacked) {
    classNames.push('stacked');
    if (typeof stacked === 'string') {
      classNames.push(stacked);
    }
  }

  if (piled) {
    classNames.push('piled');
  }

  if (color) {
    classNames.push(color);
  }

  if (secondary) {
    classNames.push('secondary');
  }

  if (className) {
    classNames.push(className);
  }

  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Segment.displayName = 'Segment';
Segment.Inline = SegmentInline;
Segment.Group = SegmentGroup;

export default Segment;

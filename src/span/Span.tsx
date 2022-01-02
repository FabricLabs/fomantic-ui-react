import { createElement } from 'react';
import { SpanProps } from './type';

const Span = ({ as = 'span', floated, className, children, ...props }: SpanProps) => {
  const classNames = [];

  if (floated) {
    classNames.push(floated);
    classNames.push('floated');
  }

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

Span.displayName = 'Span';

export default Span;

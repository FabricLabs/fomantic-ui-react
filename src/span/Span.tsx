import { createElement, forwardRef } from 'react';
import classnames from 'classnames';
import { SpanProps } from './type';

const Span = forwardRef(({ as = 'span', floated, className, content, children, ...props }: SpanProps, ref: any) => {
  return createElement(
    as,
    {
      ref,
      className: classnames({ [floated as string]: floated, floated: floated }, className) || undefined,
      ...props,
    },
    children || content,
  );
});

Span.displayName = 'Span';

export default Span;

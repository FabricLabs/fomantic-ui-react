import { createElement, forwardRef } from 'react';
import classNames from 'classnames';
import { SpanProps } from './type';

const Span = forwardRef(({ as = 'span', floated, className, content, children, ...props }: SpanProps, ref: any) => {
  return createElement(
    as,
    {
      ref,
      className: classNames({ [floated as string]: floated, floated: floated }, className) || undefined,
      ...props,
    },
    children || content,
  );
});

Span.displayName = 'Span';

export default Span;

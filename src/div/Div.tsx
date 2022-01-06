import classNames from 'classnames';
import { createElement, forwardRef } from 'react';
import { DivProps } from './type';

const Div = forwardRef(({ as = 'div', floated, className, content, children, ...props }: DivProps, ref: any) => {
  if (!as) {
    as = 'div';
  }

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

Div.displayName = 'Div';

export default Div;

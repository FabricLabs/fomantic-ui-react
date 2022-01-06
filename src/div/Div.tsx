import classnames from 'classnames';
import { createElement, forwardRef } from 'react';
import { DivProps } from './type';

const Div = forwardRef(({ as = 'div', floated, className, content, children, ...props }: DivProps, ref: any) => {
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

Div.displayName = 'Div';

export default Div;

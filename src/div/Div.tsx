import classNames from 'classnames';
import { createElement, forwardRef } from 'react';
import { DivProps } from './type';

const Div = forwardRef(
  (
    { as = 'div', floated, header, meta, description, extra, className, content, children, ...props }: DivProps,
    ref: any,
  ) => {
    if (!as) {
      as = 'div';
    }

    return createElement(
      as,
      {
        ref,
        className:
          classNames(
            {
              [floated as string]: floated,
              floated,
              header,
              meta,
              description,
              extra,
              content: typeof content === 'boolean' && content,
            },
            className,
          ) || undefined,
        ...props,
      },
      children || (typeof content !== 'boolean' ? content : undefined),
    );
  },
);

Div.displayName = 'Div';

export default Div;

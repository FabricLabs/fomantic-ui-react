import { createElement, forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DivProps } from './type';

export interface FDivProps extends DivProps, HTMLAttributes<HTMLElement> {}

const Div: ForwardRefRenderFunction<HTMLElement, FDivProps & { [key: string]: any }> = (
  { as = 'div', floated, header, meta, description, extra, className, content, children, ...props },
  ref,
) => {
  if (!as) {
    as = 'div';
  }

  const contents = children || (typeof content !== 'boolean' ? content : undefined);

  /*   if (!isNil(contents) && typeof contents !== 'string' && Children.count(contents) === 1) {
    const child = Children.only(contents);
    if (isValidElement(child)) {
      return <Fragment ref={ref}>{child}</Fragment>;
    }
  } */

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
    contents,
  );
};

Div.displayName = 'Div';

export default forwardRef(Div);

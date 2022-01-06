import classNames from 'classnames';
import { createElement } from 'react';
import { ItemContentProps } from './type';

const ItemContent = ({ as = 'div', verticalAlign, className, children, ...props }: ItemContentProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames('content', { [verticalAlign as string]: verticalAlign, aligned: verticalAlign }, className),
      ...props,
    },
    children,
  );
};

ItemContent.displayName = 'ItemContent';

export default ItemContent;

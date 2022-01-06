import classNames from 'classnames';
import { createElement } from 'react';
import { ItemGroupProps } from './type';

const ItemGroup = ({ as = 'div', divided, className, children, ...props }: ItemGroupProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'items', { divided }, className), ...props }, children);
};

ItemGroup.displayName = 'ItemGroup';

export default ItemGroup;

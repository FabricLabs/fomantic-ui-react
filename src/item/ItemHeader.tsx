import classNames from 'classnames';
import { createElement } from 'react';
import { ItemHeaderProps } from './type';

const ItemHeader = ({ as = 'div', className, content, children, ...props }: ItemHeaderProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('header', className), ...props }, children || content);
};

ItemHeader.displayName = 'ItemHeader';

export default ItemHeader;

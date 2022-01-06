import classNames from 'classnames';
import { createElement } from 'react';
import { ItemMetaProps } from './type';

const ItemMeta = ({ as = 'div', className, content, children, ...props }: ItemMetaProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('meta', className), ...props }, children || content);
};

ItemMeta.displayName = 'ItemMeta';

export default ItemMeta;

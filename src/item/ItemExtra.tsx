import classNames from 'classnames';
import { createElement } from 'react';
import { ItemExtraProps } from './type';

const ItemExtra = ({ as = 'div', className, content, children, ...props }: ItemExtraProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('extra', className), ...props }, children || content);
};

ItemExtra.displayName = 'ItemExtra';

export default ItemExtra;

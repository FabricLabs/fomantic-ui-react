import classNames from 'classnames';
import { createElement } from 'react';
import { ItemDescriptionProps } from './type';

const ItemDescription = ({ as = 'div', className, content, children, ...props }: ItemDescriptionProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('description', className), ...props }, children || content);
};

ItemDescription.displayName = 'ItemDescription';

export default ItemDescription;

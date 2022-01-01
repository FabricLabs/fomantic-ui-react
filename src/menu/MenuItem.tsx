import { createElement } from 'react';
import { MenuItemProps } from './type';

const MenuItem = ({ as = 'div', className, children, ...props }: MenuItemProps) => {
  const classNames = ['item'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;

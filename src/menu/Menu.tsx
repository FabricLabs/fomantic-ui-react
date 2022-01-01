import { createElement } from 'react';
import MenuItem from './MenuItem';
import { MenuProps } from './type';

const Menu = ({ as = 'div', className, text, children, ...props }: MenuProps) => {
  const classNames = ['ui', 'menu'];

  if (text) {
    classNames.push('text');
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

Menu.displayName = 'Menu';
Menu.Item = MenuItem;

export default Menu;

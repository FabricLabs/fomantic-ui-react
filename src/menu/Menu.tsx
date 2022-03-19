import { createElement } from 'react';
import classNames from 'classnames';
import MenuItem from './MenuItem';
import { MenuProps } from './type';
import { uniq } from '../_util/classNamesUniq';

const Menu = ({ as = 'div', className, text, children, ...props }: MenuProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: uniq(classNames('ui', 'menu', { text }, className)), ...props }, children);
};

Menu.displayName = 'Menu';
Menu.Item = MenuItem;

export default Menu;

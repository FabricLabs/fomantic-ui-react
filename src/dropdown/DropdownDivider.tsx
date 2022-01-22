import classNames from 'classnames';
import { createElement } from 'react';
import type { DropdownDividerProps } from './type';

const DropdownDivider = ({ as = 'div', className, children, ...props }: DropdownDividerProps) => {
  if (!as) {
    as = 'div';
  }
  return createElement(as, { className: classNames('divider', className), ...props }, children);
};

DropdownDivider.displayName = 'DropdownDivider';

export default DropdownDivider;

import classNames from 'classnames';
import { createElement } from 'react';
import { DividerProps } from './type';

const Divider = ({ as = 'div', className, ...props }: DividerProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'divider', className), ...props });
};

Divider.displayName = 'Divider';

export default Divider;

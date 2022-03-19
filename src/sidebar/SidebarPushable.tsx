import { createElement } from 'react';
import classNames from 'classnames';
import { SidebarPushableProps } from './type';
import { isNil } from '../_util/reactNode';

const SidebarPushable = ({ as = 'div', className, content, children, ...props }: SidebarPushableProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    { className: classNames('pushable', className), ...props },
    isNil(children) ? content : children,
  );
};

export default SidebarPushable;

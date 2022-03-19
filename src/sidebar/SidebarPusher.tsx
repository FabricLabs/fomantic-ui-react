import { createElement } from 'react';
import classNames from 'classnames';
import { isNil } from '../_util/reactNode';
import { SidebarPusherProps } from './type';

const SidebarPusher = ({ as = 'div', className, dimmed, content, children, ...props }: SidebarPusherProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    { className: classNames('pusher', { dimmed }, className), ...props },
    isNil(children) ? content : children,
  );
};

export default SidebarPusher;

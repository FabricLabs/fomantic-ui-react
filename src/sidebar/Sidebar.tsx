import { createElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import SidebarPushable from './SidebarPushable';
import SidebarPusher from './SidebarPusher';
import { SidebarProps } from './type';
import { uniq } from '../_util/classNamesUniq';

const Sidebar = ({
  as = 'div',
  className,
  direction = 'left',
  inverted,
  vertical,
  visible,
  animation = 'uncover',
  children,
  ...props
}: SidebarProps) => {
  const [animating, setAnimating] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    } else {
      setStart(true);
    }
  }, [visible]);

  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: uniq(
        classNames(
          'ui',
          'sidebar',
          {
            inverted,
            vertical,
            visible,
            animating,
          },
          animation,
          direction,
          className,
        ),
      ),
      ...props,
    },
    children,
  );
};

Sidebar.displayName = 'Sidebar';

Sidebar.Pushable = SidebarPushable;
Sidebar.Pusher = SidebarPusher;

export default Sidebar;

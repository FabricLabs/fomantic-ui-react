import { createElement } from 'react';
import { TransitionGroupProps } from './type';

const TransitionGroup = ({
  as = 'div',
  animation = 'fade',
  duration = 500,
  className,
  children,
  ...props
}: TransitionGroupProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TransitionGroup.displayName = 'TransitionGroup';

export default TransitionGroup;

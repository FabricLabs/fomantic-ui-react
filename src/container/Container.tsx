import React from 'react';
import { ContainerProps } from './type';

const Container = ({
  as = 'div',
  className,
  content,
  fluid,
  text,
  textAlign,
  children,
  ...containerProps
}: ContainerProps) => {
  const classNames = ['ui', 'container'];

  if (as === '') {
    as = 'div';
  }

  if (fluid) {
    classNames.push('fluid');
  }

  if (text) {
    classNames.push('text');
  }

  if (textAlign) {
    classNames.push(textAlign);
    classNames.push('aligned');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...containerProps }, content || children);
};

Container.displayName = 'Container';

export default Container;

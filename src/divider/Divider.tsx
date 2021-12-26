import React from 'react';
import { DividerProps } from './type';

const Divider = ({ as = 'div', className, ...props }: DividerProps) => {
  const classNames = ['ui', 'divider'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props });
};

Divider.displayName = 'Divider';

export default Divider;

import { createElement } from 'react';
import { DivProps } from './type';

const Div = ({ as = 'div', floated, className, children, ...props }: DivProps) => {
  const classNames = [];

  if (floated) {
    classNames.push(floated);
    classNames.push('floated');
  }

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

Div.displayName = 'Div';

export default Div;

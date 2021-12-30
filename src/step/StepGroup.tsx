import React from 'react';
import { StepGroupProps } from './type';

const StepGroup = ({ as = 'div', className, ordered, vertical, content, children, ...props }: StepGroupProps) => {
  const classNames = ['ui', 'steps'];

  if (ordered) {
    classNames.push('ordered');
  }

  if (vertical) {
    classNames.push('vertical');
    if (typeof vertical === 'string') {
      classNames.push(vertical);
    }
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

StepGroup.displayName = 'StepGroup';

export default StepGroup;

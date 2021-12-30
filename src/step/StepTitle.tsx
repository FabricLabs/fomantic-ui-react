import React from 'react';
import { StepTitleProps } from './type';

const StepTitle = ({ as = 'div', className, content, children, ...props }: StepTitleProps) => {
  const classNames = ['title'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

StepTitle.displayName = 'StepTitle';

export default StepTitle;

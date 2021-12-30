import React from 'react';
import { StepContentProps } from './type';

const StepContent = ({ as = 'div', className, content, children, ...props }: StepContentProps) => {
  const classNames = ['content'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

StepContent.displayName = 'StepContent';

export default StepContent;

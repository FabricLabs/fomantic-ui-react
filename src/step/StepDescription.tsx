import React from 'react';
import { StepDescriptionProps } from './type';

const StepDescription = ({ as = 'div', className, content, children, ...props }: StepDescriptionProps) => {
  const classNames = ['description'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

StepDescription.displayName = 'StepDescription';

export default StepDescription;

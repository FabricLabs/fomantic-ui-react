import React from 'react';
import StepContent from './StepContent';
import StepDescription from './StepDescription';
import StepGroup from './StepGroup';
import StepTitle from './StepTitle';
import { StepProps } from './type';

const Step = ({ as = 'div', className, active, disabled, completed, link, content, children, ...props }: StepProps) => {
  const classNames = ['step'];

  if (active) {
    classNames.push('active');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (completed) {
    classNames.push('completed');
  }

  if (link) {
    classNames.push('link');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Step.displayName = 'Step';
Step.Group = StepGroup;
Step.Content = StepContent;
Step.Title = StepTitle;
Step.Description = StepDescription;

export default Step;

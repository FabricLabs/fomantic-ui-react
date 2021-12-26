import React from 'react';
import { LabelDetailProps } from './type';

export const LabelDetail = ({ as = 'div', className, content, children, ...props }: LabelDetailProps) => {
  const classNames = ['detail'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, content || children);
};

LabelDetail.displayName = 'LabelDetail';

export default LabelDetail;

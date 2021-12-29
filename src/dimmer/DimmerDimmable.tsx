import React from 'react';
import { DimmerDimmableProps } from './type';

const DimmerDimmable = ({ as = 'div', className, dimmed, content, children, ...props }: DimmerDimmableProps) => {
  const classNames = ['dimmable'];

  if (dimmed) {
    classNames.push('dimmed');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

DimmerDimmable.displayName = 'DimmerDimmable';

export default DimmerDimmable;

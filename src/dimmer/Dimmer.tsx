import React from 'react';
import DimmerDimmable from './DimmerDimmable';
import { DimmerProps } from './type';

const Dimmer = ({ as = 'div', className, active, content, children, ...props }: DimmerProps) => {
  const classNames = ['ui', 'dimmer'];

  if (active) {
    classNames.push('active');
  } else {
    classNames.push('hidden');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Dimmer.displayName = 'Dimmer';
Dimmer.Dimmable = DimmerDimmable;

export default Dimmer;

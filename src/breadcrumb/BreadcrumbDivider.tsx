import React from 'react';
// import PropTypes from 'prop-types';
import { BreadcrumbDividerProps } from './type';

const BreadcrumbDivider = ({ as = 'div', className, children, ...props }: BreadcrumbDividerProps) => {
  const classNames = ['divider'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children);
};

BreadcrumbDivider.displayName = 'BreadcrumbDivider';

export default BreadcrumbDivider;

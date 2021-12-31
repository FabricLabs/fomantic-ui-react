import React from 'react';
import { BreadcrumbItemProps } from './type';

const BreadcrumbItem = ({ as = 'div', className, link, href, active, children, ...props }: BreadcrumbItemProps) => {
  const classNames = ['section'];

  if (active) {
    classNames.push('active');
  }

  if (className) {
    classNames.push(className);
  }

  if (link) {
    as = 'a';
  }

  return React.createElement(as, { className: classNames.join(' '), href, ...props }, children);
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;

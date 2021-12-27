import React from 'react';
import { HeaderContentProps } from './type';

const HeaderContent = ({ as = 'div', className, content, children, ...props }: HeaderContentProps) => {
  if (as === '') {
    as = 'div';
  }

  const classNames = ['content'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

HeaderContent.displayName = 'HeaderContent';

export default HeaderContent;

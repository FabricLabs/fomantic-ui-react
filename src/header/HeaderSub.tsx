import React from 'react';
import { HeaderSubProps } from './type';

const HeaderSub = ({ as = 'div', className, content, children, ...props }: HeaderSubProps) => {
  if (as === '') {
    as = 'div';
  }

  const classNames = ['sub', 'header'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

HeaderSub.displayName = 'HeaderSub';

export default HeaderSub;

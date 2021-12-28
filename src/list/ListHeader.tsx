import React from 'react';
import { ListHeaderProps } from './type';

const ListHeader = ({ as = 'div', className, content, children, ...props }: ListHeaderProps) => {
  const classNames = ['header'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

ListHeader.displayName = 'ListHeader';

export default ListHeader;

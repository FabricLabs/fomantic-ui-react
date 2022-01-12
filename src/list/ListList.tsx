import React from 'react';
import { ListListProps } from './type';

const ListList = ({ as = 'div', className, content, children, ...props }: ListListProps) => {
  const classNames = [];

  if (as !== 'ul' && as !== 'ol') {
    classNames.push('list');
  }

  if (className) {
    classNames.push(className);
  }

  if (!as) {
    as = 'div';
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

ListList.displayName = 'ListList';

export default ListList;

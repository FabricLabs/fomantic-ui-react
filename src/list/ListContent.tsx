import React from 'react';
import { ListContentProps } from './type';

const ListContent = ({ as = 'div', className, content, children, ...props }: ListContentProps) => {
  const classNames = ['content'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

ListContent.displayName = 'ListContent';

export default ListContent;

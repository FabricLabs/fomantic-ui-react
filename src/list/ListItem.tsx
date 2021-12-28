import React from 'react';
import { ListItemProps } from './type';

const ListItem = ({ as = 'div', href, active, className, content, children, ...props }: ListItemProps) => {
  const classNames = ['item'];

  if (active) {
    classNames.push('active');
  }

  if (className) {
    classNames.push(className);
  }

  if (href) {
    as = 'a';
  }

  return React.createElement(as, { className: classNames.join(' '), href, ...props }, children || content);
};

ListItem.displayName = 'ListItem';

export default ListItem;

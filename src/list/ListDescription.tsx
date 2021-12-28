import React from 'react';
import { ListDescriptionProps } from './type';

const ListDescription = ({ as = 'div', className, content, children, ...props }: ListDescriptionProps) => {
  const classNames = ['description'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

ListDescription.displayName = 'ListDescription';

export default ListDescription;

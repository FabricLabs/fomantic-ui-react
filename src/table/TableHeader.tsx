import { createElement } from 'react';
import { TableHeaderProps } from './type';

const TableHeader = ({ as = 'thead', className, children, ...props }: TableHeaderProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;

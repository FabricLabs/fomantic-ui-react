import { createElement } from 'react';
import { TableRowProps } from './type';

const TableRow = ({ as = 'tr', className, children, ...props }: TableRowProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TableRow.displayName = 'TableRow';

export default TableRow;

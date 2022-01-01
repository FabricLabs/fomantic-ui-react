import React from 'react';
import TableCell from './TableCell';
import { TableHeaderCellProps } from './type';

const TableHeaderCell = ({ as = 'th', className, children, ...props }: TableHeaderCellProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return (
    <TableCell as={as} className={className} {...props}>
      {children}
    </TableCell>
  );
};

TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;

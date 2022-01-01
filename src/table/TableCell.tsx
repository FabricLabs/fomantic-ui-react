import { createElement } from 'react';
import { TableCellProps } from './type';

const TableCell = ({ as = 'td', singleLine, textAlign, className, children, ...props }: TableCellProps) => {
  const classNames = [];

  if (singleLine) {
    classNames.push('single line');
  }

  if (textAlign) {
    classNames.push(textAlign);
    classNames.push('aligned');
  }

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TableCell.displayName = 'TableCell';

export default TableCell;

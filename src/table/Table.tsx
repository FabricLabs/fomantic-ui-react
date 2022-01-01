import { createElement } from 'react';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
import { TableProps } from './type';

const Table = ({ as = 'table', celled, padded, className, children, ...props }: TableProps) => {
  const classNames = ['ui', 'table'];

  if (celled) {
    classNames.push('celled');
  }

  if (padded) {
    classNames.push('padded');
  }

  if (className) {
    classNames.push(className);
  }

  className = classNames.join(' ');

  return createElement(as, { className, ...props }, children);
};

Table.displayName = 'Table';
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
Table.Footer = TableFooter;

export default Table;

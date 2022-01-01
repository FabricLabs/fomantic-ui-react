import { createElement } from 'react';
import { TableFooterProps } from './type';

const TableFooter = ({ as = 'tfoot', className, children, ...props }: TableFooterProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TableFooter.displayName = 'TableFooter';

export default TableFooter;

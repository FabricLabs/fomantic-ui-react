import { createElement } from 'react';
import { TableBodyProps } from './type';

const TableBody = ({ as = 'tbody', className, children, ...props }: TableBodyProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  className = classNames.length > 0 ? classNames.join(' ') : undefined;

  return createElement(as, { className, ...props }, children);
};

TableBody.displayName = 'TableBody';

export default TableBody;

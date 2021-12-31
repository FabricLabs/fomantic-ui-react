import { createElement } from 'react';
import { GridColumnProps } from './type';
import { numberToWord } from '../_util/numberToWord';

const GridColumn = ({ as = 'div', className, floated, wide, color, children, ...props }: GridColumnProps) => {
  const classNames = ['column'];

  if (floated) {
    classNames.push(floated);
    classNames.push('floated');
  }

  if (color) {
    classNames.push(color);
  }

  if (wide) {
    classNames.push(numberToWord(wide));
    classNames.push('wide');
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

GridColumn.displayName = 'GridColumn';

export default GridColumn;

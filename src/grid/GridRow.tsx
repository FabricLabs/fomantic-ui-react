import { createElement } from 'react';
import { numberToWord } from '../_util/numberToWord';
import { GridRowProps } from './type';

const GridRow = ({ as = 'div', className, stretched, centered, color, columns, children, ...props }: GridRowProps) => {
  const classNames = ['row'];

  if (stretched) {
    classNames.push('stretched');
  }

  if (centered) {
    classNames.push('centered');
  }

  if (color) {
    classNames.push(color);
  }

  if (columns) {
    if (columns === 'equal') {
      classNames.push('equal width');
    } else {
      classNames.push(numberToWord(columns));
      classNames.push('column');
    }
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

GridRow.displayName = 'GridRow';

export default GridRow;

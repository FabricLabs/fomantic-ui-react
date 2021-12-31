import { createElement } from 'react';
import { numberToWord } from '../_util/numberToWord';
import GridColumn from './GridColumn';
import GridRow from './GridRow';
import { GridProps } from './type';

const Grid = ({
  as = 'div',
  className,
  centered,
  compact,
  relaxed,
  padded,
  celled,
  divided,
  columns,
  children,
  ...props
}: GridProps) => {
  const classNames = ['ui', 'grid'];

  if (centered) {
    classNames.push('centered');
  }

  if (compact) {
    if (typeof compact === 'string') {
      classNames.push(compact);
    }
    classNames.push('compact');
  }

  if (relaxed) {
    if (typeof relaxed === 'string') {
      classNames.push(relaxed);
    }
    classNames.push('relaxed');
  }

  if (padded) {
    if (typeof padded === 'string') {
      classNames.push(padded);
    }
    classNames.push('padded');
  }

  if (celled) {
    if (typeof celled === 'string') {
      classNames.push(celled);
    }
    classNames.push('celled');
  }

  if (divided) {
    if (typeof divided === 'string') {
      classNames.push(divided);
    }
    classNames.push('divided');
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

Grid.displayName = 'Grid';
Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;

import { ElementType } from 'react';
import { CollectionProps, ElementProps } from '../common';

export interface TableProps extends CollectionProps {
  /**
   * 单元格
   */
  celled?: boolean;
  /**
   * 填充
   */
  padded?: boolean;
}

export interface TableHeaderProps extends CollectionProps {}

export interface TableHeaderCellProps extends TableCellProps {}

export interface TableBodyProps extends CollectionProps {}

export interface TableRowProps extends CollectionProps {}

export interface TableCellProps extends ElementProps {
  /**
   * 单行
   */
  singleLine?: boolean;
  /**
   * 文本对齐方式
   */
  textAlign?: 'left' | 'center' | 'right';
}

export interface TableFooterProps extends CollectionProps {}

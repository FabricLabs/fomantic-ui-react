import { ElementType } from 'react';
import { CollectionProps, ElementProps, FNode } from '../common';

export interface TableProps extends CollectionProps {
  /**
   * 单元格
   */
  celled?: boolean;
  /**
   * 填充
   */
  padded?: boolean;
  /**
   * 标签名称
   * @default table
   */
  as?: ElementType;
}

export interface TableHeaderProps extends CollectionProps {
  /**
   * 标签名称
   * @default thead
   */
  as?: ElementType;
}

export interface TableHeaderCellProps extends TableCellProps {
  /**
   * 标签名称
   * @default th
   */
  as?: ElementType;
}

export interface TableBodyProps extends CollectionProps {
  /**
   * 标签名称
   * @default tbody
   */
  as?: ElementType;
}

export interface TableRowProps extends CollectionProps {
  /**
   * 标签名称
   * @default tr
   */
  as?: ElementType;
}

export interface TableCellProps extends ElementProps {
  /**
   * 单行
   */
  singleLine?: boolean;
  /**
   * 文本对齐方式
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * 标签名称
   * @default td
   */
  as?: ElementType;
}

export interface TableFooterProps extends CollectionProps {
  /**
   * 标签名称
   * @default tfoot
   */
  as?: ElementType;
}

import { ElementProps, ViewProps } from '../common';

export interface ItemProps extends ViewProps {}

export interface ItemGroupProps extends ViewProps {
  /**
   * 分割线
   */
  divided?: boolean;
}

export interface ItemContentProps extends ViewProps {
  /**
   * 垂直对齐
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface ItemHeaderProps extends ElementProps {}

export interface ItemDescriptionProps extends ElementProps {}

export interface ItemMetaProps extends ElementProps {}

export interface ItemExtraProps extends ElementProps {}

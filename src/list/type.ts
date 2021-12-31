import { ElementProps } from '../common';
import { FIconProps } from '../icon/type';

export interface ListProps extends ElementProps {
  /**
   * 条目列表
   */
  items?: string[];
  /**
   * 宽松
   */
  relaxed?: boolean;
  /**
   * 分割线
   */
  divided?: boolean;
  /**
   * 列表符号
   */
  bulleted?: boolean;
  /**
   * 横向排列
   */
  horizontal?: boolean;
  /**
   * 排序序号
   */
  ordered?: boolean;
  /**
   * 后缀
   */
  suffixed?: boolean;
  /**
   * 链接
   */
  link?: boolean;
}

export interface ListItemProps extends ElementProps {
  /**
   * 链接地址
   */
  href?: string;
  /**
   * Active
   */
  active?: boolean;
}

export interface ListContentProps extends ElementProps {}

export interface ListHeaderProps extends ElementProps {}

export interface ListDescriptionProps extends ElementProps {}

export interface ListIconProps extends FIconProps {
  /**
   * 垂直对齐方式
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface ListListProps extends ElementProps {}

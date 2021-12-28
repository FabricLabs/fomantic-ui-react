import { CommonProps } from '../common';
import { FIconProps } from '../icon/type';

export interface ListProps extends CommonProps {
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

export interface ListItemProps extends CommonProps {
  /**
   * 链接地址
   */
  href?: string;
  /**
   * Active
   */
  active?: boolean;
}

export interface ListContentProps extends CommonProps {}

export interface ListHeaderProps extends CommonProps {}

export interface ListDescriptionProps extends CommonProps {}

export interface ListIconProps extends FIconProps {
  /**
   * 垂直对齐方式
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface ListListProps extends CommonProps {}

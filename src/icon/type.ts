import { MouseEventHandler } from 'react';

export interface IconProps {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 图标名称
   */
  name: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 加载中
   */
  loading?: boolean;
  /**
   * 紧身
   */
  fitted?: boolean;
  /**
   * 链接
   */
  link?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 边框
   */
  bordered?: boolean;
  /**
   * 边框是否添加颜色
   */
  colored?: boolean;
  /**
   * 反转
   */
  inverted?: boolean;
  /**
   * 翻转
   */
  flipped?: 'horizontally' | 'vertically' | false;
  /**
   * 旋转
   */
  rotated?: 'clockwise' | 'counterclockwise' | false;
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  /**
   * 颜色
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black';
  /**
   * 点击时触发
   */
  onClick?: MouseEventHandler<HTMLElement>;
  /**
   * 鼠标指针移动到元素上时触发
   */
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  /**
   * 鼠标指针移出元素时触发
   */
  onMouseLeave?: MouseEventHandler<HTMLElement>;
}

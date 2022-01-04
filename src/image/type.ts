import { ElementType } from 'react';
import { ElementProps } from '../common';

export interface ImageProps extends ElementProps {
  /**
   * 标签名称
   * @default img
   */
  as?: ElementType;
  /**
   * 包裹
   */
  wrapped?: boolean;
  /**
   * 链接地址，使用此 href 将图像呈现为 <a> 标记
   */
  href?: string;
  /**
   * 隐藏
   */
  hidden?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 头像
   */
  avatar?: boolean;
  /**
   * 边框
   */
  bordered?: boolean;
  /**
   * 流式布局
   */
  fluid?: boolean;
  /**
   * 圆角
   */
  rounded?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 居中
   */
  centered?: boolean;
  /**
   * 垂直对齐
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
  /**
   * ui
   *  @default true
   */
  ui?: boolean;
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

export interface ImageGroupProps extends ElementProps {
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}

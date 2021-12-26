import { FNode } from '../common';
export interface LabelProps {
  /**
   * 标签名称
   * @default div
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 标签内容
   */
  content?: string;
  /**
   * 图片
   */
  image?: boolean;
  /**
   * tag 标记
   */
  tag?: boolean;
  /**
   * 图标
   */
  icon?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 为空
   */
  empty?: boolean;
  /**
   * 基本
   */
  basic?: boolean;
  /**
   * Inverted
   */
  inverted?: boolean;
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
   * 附加
   */
  attached?: 'top' | 'right' | 'bottom' | 'left' | 'top left' | 'top right' | 'bottom left' | 'bottom right';
  /**
   * 内容，同 content
   */
  children?: FNode;
}

export interface LabelDetailProps {
  /**
   * 标签名称
   * @default div
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 内容，同 content
   */
  children?: FNode;
}

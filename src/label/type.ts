import { ElementProps } from '../common';
export interface LabelProps extends ElementProps {
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
  icon?: boolean | string;
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
}

export interface LabelDetailProps extends ElementProps {}

import { CommonProps } from '../common';

export interface LoaderProps extends CommonProps {
  /**
   * 文本
   */
  text?: boolean;
  /**
   * 反转
   */
  inverted?: boolean;
  /**
   * 不确定
   */
  indeterminate?: boolean;
  /**
   * 积极
   */
  active?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 内联
   */
  inline?: boolean | 'centered';
  /**
   * 速度
   */
  speed?: 'slow' | 'fast';
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
  styles?: 'double' | 'elastic';
}

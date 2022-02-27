import { ModuleProps } from '../common';

export interface RatingProps extends ModuleProps {
  /**
   * 图标
   */
  icon?: string;
  /**
   * 最大值
   */
  max?: number;
  /**
   * 评分
   */
  rating?: number;
  /**
   * 颜色
   */
  color?:
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
   * 禁用
   */
  disabled?: boolean;
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive';
}

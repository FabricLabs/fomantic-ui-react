import { ElementProps } from '../common';

export interface SegmentProps extends ElementProps {
  /**
   * 占位符
   */
  placeholder?: boolean;
  /**
   * 凸显
   */
  raised?: boolean;
  /**
   * 堆叠式
   */
  stacked?: boolean | 'tall';
  /**
   * 堆叠
   */
  piled?: boolean;
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
   * 次要
   */
  secondary?: boolean;
}

export interface SegmentInlineProps extends ElementProps {}

export interface SegmentGroupProps extends ElementProps {
  /**
   * 基础
   */
  basic?: boolean;
}

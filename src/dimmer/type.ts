import { ElementProps } from '../common';

export interface DimmerProps extends ElementProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 反转
   */
  inverted?: boolean;
}

export interface DimmerDimmableProps extends ElementProps {
  /**
   * 激活遮罩
   */
  dimmed?: boolean;
}

import { CommonProps } from '../common';

export interface DimmerProps extends CommonProps {
  /**
   * 激活
   */
  active?: boolean;
}

export interface DimmerDimmableProps extends CommonProps {
  /**
   * 激活遮罩
   */
  dimmed?: boolean;
}

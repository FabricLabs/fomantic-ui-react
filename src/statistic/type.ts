import { ElementProps, ViewProps } from '../common';

export interface StatisticProps extends ViewProps {
  /**
   * class ui
   */
  ui?: boolean;
}

export interface StatisticGroupProps extends ViewProps {}

export interface StatisticValueProps extends ElementProps {}

export interface StatisticLabelProps extends ElementProps {}

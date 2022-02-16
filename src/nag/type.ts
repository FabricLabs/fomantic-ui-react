import { ModuleProps } from '../common';

export interface NagProps extends ModuleProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 固定
   */
  fixed?: 'top' | 'bottom' | boolean;
  /**
   * 动画完成时执行
   */
  complete?: Function;
}

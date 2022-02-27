import { ModuleProps } from '../common';

export interface ProgressProps extends ModuleProps {
  /**
   * 显示文本
   */
  label?: string;
  /**
   * 百分比
   */
  percent?: number;
  /**
   * 百分比为100时，自动成功样式
   */
  autoSuccess?: boolean;
  /**
   * 指示
   */
  indicating?: boolean;
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 进度文本；默认为百分比
   */
  progress?: boolean | string;
  /**
   * 进度文本居中显示
   */
  centered?: boolean;
}

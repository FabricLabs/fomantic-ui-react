import { ModuleProps, OptionData } from '../common';

export interface SelectProps extends ModuleProps {
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 下拉选项
   */
  options?: Array<OptionData>;
}

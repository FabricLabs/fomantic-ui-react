import { ModuleProps } from '../common';
import type { DropdownItemProps } from '../dropdown/type';

export interface SelectProps extends ModuleProps {
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 下拉选项
   */
  options?: Array<DropdownItemProps>;
  /**
   * 字段名
   */
  name?: string;
  /**
   * 默认值
   */
  value?: string | number;
}

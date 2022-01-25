import { ElementType } from 'react';
import { StyledProps } from '../common';

export interface CheckboxProps extends StyledProps {
  /**
   * 标签或组件名称
   */
  as?: ElementType;
  /**
   * HTML 元素原生属性
   */
  name?: string;
  /**
   * 关联元素的文本
   */
  label?: string;
  /**
   * 单选
   */
  radio?: boolean;
  /**
   * 选中
   */
  checked?: boolean;
  /**
   * 滑动条
   */
  slider?: boolean;
  /**
   * 切换
   */
  toggle?: boolean;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 合身
   */
  fitted?: boolean;
  /**
   * 右对齐
   */
  right?: boolean;
}

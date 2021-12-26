import { FNode } from '../common';

export interface ContainerProps {
  /**
   * 标签名称
   * @default div
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 标签内容
   */
  content?: string;
  /**
   * 容器没有最大宽度
   */
  fluid?: boolean;
  /**
   * 减小最大宽度以更自然地容纳文本
   */
  text?: boolean;
  /**
   * 对齐容器文本
   */
  textAlign?: 'left' | 'center' | 'right' | 'justified';
  /**
   * 标签内容，同 content
   */
  children?: FNode;
}

import { FNode } from '../common';

export interface <%= PascalCaseComponent %>Props {
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
  content?: FNode;
  /**
   * 内容，同 content
   */
  children?: FNode;
}

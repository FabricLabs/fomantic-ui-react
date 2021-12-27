import { FNode } from '../common';

export interface HeaderProps {
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
   * 内容
   */
  content?: string;
  /**
   * 副标题
   */
  sub?: boolean;
  /**
   * 图标
   */
  icon?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 分割线
   */
  dividing?: boolean;
  /**
   * 区块
   */
  block?: boolean;
  /**
   * 反转黑色背景的标题颜色
   */
  inverted?: boolean;
  /**
   * 浮动
   */
  floated?: 'left' | 'right';
  /**
   * 附属
   */
  attached?: boolean | 'top' | 'bottom';
  /**
   * 文本对齐方式
   */
  textAlign?: 'left' | 'center' | 'right' | 'justified';
  /**
   * 尺寸
   */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  /**
   * 颜色
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'purple'
    | 'violet'
    | 'pink'
    | 'brown'
    | 'grey';
  /**
   * 内容，同 content
   */
  children?: FNode;
}

export interface HeaderContentProps {
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
   * 内容
   */
  content?: string;
  /**
   * 内容，同 content
   */
  children?: FNode;
}

export interface HeaderSubProps {
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
   * 内容
   */
  content?: string;
  /**
   * 内容，同 content
   */
  children?: FNode;
}

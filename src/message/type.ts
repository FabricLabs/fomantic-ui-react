import { ElementType } from 'react';
import { CollectionProps } from '../common';

export interface MessageProps extends CollectionProps {
  /**
   * 图标
   */
  icon?: ElementType;
  /**
   * 标题
   */
  header?: ElementType;
  /**
   * 内容
   */
  content?: ElementType;
  /**
   * 可关闭
   */
  closable?: boolean;
  /**
   * 隐藏
   */
  hidden?: boolean;
  /**
   * 显示
   */
  visible?: boolean;
  /**
   * 紧凑
   */
  compact?: boolean;
  /**
   * 浮动
   */
  floating?: boolean;
  /**
   * 文本对齐方式
   */
  textAligned?: 'center' | 'right';
  /**
   * 类型
   */
  type?: 'warning' | 'info' | 'success' | 'error' | 'positive' | 'negative';
  /**
   * 颜色
   */
  color?:
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'black';
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}

export interface MessageHeaderProps extends CollectionProps {}

export interface MessageListProps extends CollectionProps {}

export interface MessageItemProps extends CollectionProps {}

export interface MessageContentProps extends CollectionProps {}

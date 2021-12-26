import { MouseEvent } from 'react';

import { FNode } from '../common';

export interface FButtonProps {
  /**
   * 标签名称
   * @default button
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 紧凑
   */
  compact?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 基本样式
   */
  basic?: boolean;
  /**
   * 动画
   */
  animated?: boolean | 'fade' | 'vertical';
  /**
   * 按钮尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
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
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black'
    | 'facebook'
    | 'google plus'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'vk'
    | 'youtube';
  /**
   * 图标
   */
  icon?: string | boolean;
  /**
   * 按钮内容
   */
  content?: FNode;
  /**
   * 按钮内容，同 content
   */
  children?: FNode;
  /**
   * 点击时触发
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface FButtonContentProps {
  /**
   * 标签名称
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
   * 最初隐藏，悬停时可见。
   */
  hidden?: boolean;
  /**
   * 最初可见，悬停时隐藏。
   */
  visible?: boolean;
  /**
   * 内容 同 content
   */
  children?: FNode;
}

import { ElementType, MouseEvent } from 'react';

import { ElementProps } from '../common';

export interface ButtonProps extends ElementProps {
  /**
   * 标签名称
   * @default button
   */
  as?: ElementType;
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
   * 点击时触发
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonContentProps extends ElementProps {
  /**
   * 最初隐藏，悬停时可见。
   */
  hidden?: boolean;
  /**
   * 最初可见，悬停时隐藏。
   */
  visible?: boolean;
}

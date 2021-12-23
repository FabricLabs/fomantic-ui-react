import React, { ReactNode } from 'react';
import { ButtonContent } from './buttonContent';
import { Icon } from '../../components';
import '../less/definitions/globals/reset.less';
import '../less/definitions/globals/site.less';
import '../less/definitions/elements/button.less';

export type ButtonProps = {
  /**
   * 按钮内容
   */
  content?: string;
  /**
   * 标签名称
   */
  as?: string;
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
   * class 属性
   */
  className?: string;
  /**
   * 按钮尺寸
   */
  size?:
  | 'mini'
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'massive';
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
  children?: ReactNode;
};

/**
 * 按钮用于开始一个即时操作。
 */
export const Button = ({
  as = 'button',
  className,
  size,
  color,
  compact,
  disabled,
  animated,
  basic,
  icon,
  content,
  children,
  ...props
}: ButtonProps) => {
  const classNames = ['ui', 'button'];
  if (basic) {
    classNames.push('basic');
  }

  if (compact) {
    classNames.push('compact');
  }

  if (color) {
    classNames.push(color);
  }

  if (size) {
    classNames.push(size);
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (animated) {
    classNames.push('animated');
    if (typeof animated === 'string') {
      classNames.push(animated);
    }
  }

  if (icon) {
    classNames.push('icon');
    if (typeof icon === 'string') {
      children = <Icon name={icon} />
    }
  }

  if (className) {
    classNames.push(className);
  }

  if (as === '') {
    as = 'button';
  }

  return React.createElement(
    as,
    { className: classNames.join(' '), ...props },
    children || content
  );
};

Button.Content = ButtonContent;

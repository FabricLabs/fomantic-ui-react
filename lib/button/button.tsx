import React from 'react';
import '../less/definitions/globals/reset.less';
import '../less/definitions/globals/site.less';
import '../less/definitions/elements/button.less';

export type ButtonProps = {
  /**
   * 按钮内容
   */
  label?: string;
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
  children?: string;
};

const Button = ({
  as = 'button',
  className,
  size,
  color,
  compact = false,
  disabled = false,
  basic = false,
  label,
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
  if (className) {
    classNames.push(className);
  }
  return React.createElement(
    as,
    { className: classNames.join(' '), ...props },
    label ?? children
  );
};

export default Button;

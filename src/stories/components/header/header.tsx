import React, { ReactNode } from 'react';
import '../less/definitions/elements/header.less';

export type HeaderProps = {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 按钮内容
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
  children?: ReactNode;
};

export const Header = ({
  as = 'div',
  className,
  content,
  sub,
  icon,
  disabled,
  dividing,
  block,
  inverted,
  floated,
  attached,
  textAlign,
  size,
  color,
  children,
  ...props
}: HeaderProps) => {
  if (as === '') {
    as = 'div';
  }

  const classNames = ['ui', 'header'];

  if (sub) {
    classNames.push('sub');
  }

  if (icon) {
    classNames.push('icon');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (dividing) {
    classNames.push('dividing');
  }

  if (block) {
    classNames.push('block');
  }

  if (inverted) {
    classNames.push('inverted');
  }

  if (floated) {
    classNames.push(floated);
  }

  if (attached) {
    classNames.push('attached');
    if (typeof attached === 'string') {
      classNames.push(attached);
    }
  }

  if (textAlign) {
    classNames.push(textAlign);
    classNames.push('aligned');
  }

  if (size) {
    classNames.push(size);
  }

  if (color) {
    classNames.push(color);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(
    as,
    { className: classNames.join(' '), ...props },
    children || content
  );
};

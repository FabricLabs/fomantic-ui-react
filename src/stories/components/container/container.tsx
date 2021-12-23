import React, { ReactNode } from 'react';
import '../less/definitions/elements/container.less';

export type ContainerProps = {
  /**
   * 标签名称
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
  children?: ReactNode;
};

export const Container = ({
  as = 'div',
  className,
  content,
  fluid,
  text,
  textAlign,
  children,
  ...props
}: ContainerProps) => {
  const classNames = ['ui', 'container'];

  if (as === '') {
    as = 'div';
  }

  if (fluid) {
    classNames.push('fluid');
  }

  if (text) {
    classNames.push('text');
  }

  if (textAlign) {
    classNames.push(textAlign);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(
    as,
    { className: classNames.join(' '), ...props },
    content || children
  );
};

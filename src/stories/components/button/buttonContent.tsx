import React, { ReactNode } from 'react';

export type ButtonContentProps = {
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
  children?: ReactNode;
};

export const ButtonContent = ({
  as = 'div',
  className,
  content,
  hidden,
  visible,
  children,
  ...props
}: ButtonContentProps) => {
  const classNames = ['content'];

  if (hidden) {
    classNames.push('hidden');
  }

  if (visible) {
    classNames.push('visible');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(
    as,
    { className: classNames.join(' '), ...props },
    content ?? children
  );
};

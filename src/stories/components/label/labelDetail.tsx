import React, { ReactNode } from 'react';

export type LabelDetailProps = {
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
  children?: ReactNode;
};

export const LabelDetail = ({ as = 'div', className, content, children, ...props }: LabelDetailProps) => {
  const classNames = ['detail'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, content || children);
};

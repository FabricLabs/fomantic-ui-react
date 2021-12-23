import React, { ReactNode } from 'react';
import { LabelDetail } from './labelDetail';
import '../less/definitions/globals/reset.less';
import '../less/definitions/globals/site.less';
import '../less/definitions/elements/label.less';

export type LabelProps = {
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
   * 图片
   */
  image?: boolean;
  children?: ReactNode;
};

export const Label = ({ as = 'div', className, content,image, children, ...props }: LabelProps) => {
  const classNames = ['ui', 'label'];

  if (as === '') {
    as = 'div';
  }

  if (image) {
    classNames.push('image');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, content || children);
};

Label.Detail = LabelDetail;

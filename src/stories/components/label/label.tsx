import React, { ReactNode } from 'react';
import { LabelDetail } from './labelDetail';
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
  /**
   * tag 标记
   */
  tag?: boolean;
  /**
   * 图标
   */
  icon?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 为空
   */
  empty?: boolean;
  /**
   * 基本
   */
  basic?: boolean;
  /**
   * Inverted
   */
  inverted?: boolean;
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
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
    | 'black';
  /**
   * 附加
   */
  attached?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';
  children?: ReactNode;
};

export const Label = ({
  as = 'div',
  className,
  content,
  image,
  tag,
  icon,
  circular,
  attached,
  empty,
  basic,
  inverted,
  size,
  color,
  children,
  ...props
}: LabelProps) => {
  const classNames = ['ui', 'label'];

  if (as === '') {
    as = 'div';
  }

  if (image) {
    classNames.push('image');
  }

  if (tag) {
    classNames.push('tag');
  }

  if (icon) {
    classNames.push('icon');
  }

  if (circular) {
    classNames.push('circular');
  }

  if (empty) {
    classNames.push('empty');
  }

  if (basic) {
    classNames.push('basic');
  }

  if (inverted) {
    classNames.push('inverted');
  }

  if (size) {
    classNames.push(size);
  }

  if (color) {
    classNames.push(color);
  }

  if (attached) {
    classNames.push(attached);
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

Label.Detail = LabelDetail;

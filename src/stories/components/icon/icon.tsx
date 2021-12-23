import React from 'react';
import '../less/definitions/globals/reset.less';
import '../less/definitions/globals/site.less';
import '../less/definitions/elements/icon.less';
import '../less/definitions/elements/loader.less';

export type IconProps = {
  /**
   * 标签名称
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 图标名称
   */
  name: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 加载中
   */
  loading?: boolean;
  /**
   * 紧身
   */
  fitted?: boolean;
  /**
   * 链接
   */
  link?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 边框
   */
  bordered?: boolean;
  /**
   * 边框是否添加颜色
   */
  colored?: boolean;
  /**
   * inverted
   */
  inverted?: boolean;
  /**
   * 翻转
   */
  flipped?: 'horizontally' | 'vertically' | false;
  /**
   * 旋转
   */
  rotated?: 'clockwise' | 'counterclockwise' | false;
  /**
   * 尺寸
   */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  /**
   * 颜色
   */
  color?: 'primary' | 'secondary' | 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black';
};

export const Icon = ({ as = 'i', className, name, disabled, loading, fitted, link, flipped, rotated, circular, bordered, colored, inverted, size, color, ...props }: IconProps) => {
  const classNames = ['icon', name];
  if (size) {
    classNames.push(size);
  }
  if (disabled) {
    classNames.push('disabled');
  }
  if (loading) {
    classNames.push('loading');
  }
  if (fitted) {
    classNames.push('fitted');
  }
  if (link) {
    classNames.push('link');
  }
  if (flipped) {
    if (flipped === 'horizontally') {
      classNames.push('horizontally flipped');
    } else if (flipped === 'vertically') {
      classNames.push('vertically flipped');
    }
  }
  if (rotated) {
    if (rotated === 'clockwise') {
      classNames.push('clockwise rotated');
    } else if (rotated === 'counterclockwise') {
      classNames.push('counterclockwise rotated');
    }
  }
  if (circular) {
    classNames.push('circular');
  }
  if (bordered) {
    classNames.push('bordered');
  }
  if (colored) {
    classNames.push('colored');
  }
  if (inverted) {
    classNames.push('inverted');
  }
  if (color) {
    classNames.push(color);
  }
  if (className) {
    classNames.push(className);
  }
  return React.createElement(as, { className: classNames.join(' '), ...props });
};

import { CommonProps } from '../common';

export interface RailProps extends CommonProps {
  /**
   * 位置
   */
  position: 'left' | 'right';
  /**
   * 内部
   */
  internal?: boolean;
  /**
   * 分割线
   */
  dividing?: boolean;
  /**
   * 贴上
   */
  attached?: boolean;
  /**
   * 靠近
   */
  close?: boolean | 'very';
}

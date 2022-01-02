import { ModuleProps } from '../common';

interface shape {
  hide: number;
  show: number;
}

export interface TransitionProps extends ModuleProps {
  /**
   * 显示组件
   * @default true
   */
  visible?: boolean;
  /**
   * 持续时间；单位：ms
   * @default 500
   */
  duration?: number | shape;
  /**
   * 动画
   * @default fade
   */
  animation?:
    | 'browse'
    | 'browse right'
    | 'drop'
    | 'fade'
    | 'fade up'
    | 'fade down'
    | 'fade left'
    | 'fade right'
    | 'fly up'
    | 'fly down'
    | 'fly left'
    | 'fly right'
    | 'horizontal flip'
    | 'vertical flip'
    | 'scale'
    | 'slide up'
    | 'slide down'
    | 'slide left'
    | 'slide right'
    | 'swing up'
    | 'swing down'
    | 'swing left'
    | 'swing right'
    | 'zoom'
    | 'jiggle'
    | 'flash'
    | 'shake'
    | 'pulse'
    | 'tada'
    | 'bounce'
    | 'glow';
}

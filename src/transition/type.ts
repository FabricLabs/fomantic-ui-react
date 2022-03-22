import { ModuleProps, timeShape } from '../common';

export type animation =
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

export interface animationShape {
  /**
   * 显示动画
   */
  show: animation;
  /**
   * 隐藏动画
   */
  hide: animation;
}

export interface TransitionProps extends ModuleProps {
  /**
   * 显示组件
   */
  visible?: boolean;
  /**
   * 持续时间；单位：ms
   */
  duration?: number | timeShape;
  /**
   * 动画
   */
  animation?: animation | animationShape;
  /**
   * 显示完成时触发
   */
  onShow?: Function;
  /**
   * 隐藏完成时触发
   */
  onHide?: Function;
  /**
   * 开始时触发
   */
  onStart?: Function;
  /**
   * 结束时触发
   */
  onComplete?: Function;
}

export interface TransitionGroupProps extends ModuleProps {
  /**
   * 动画
   */
  animation?: animation;
  /**
   * 持续时间；单位：ms
   */
  duration?: number | timeShape;
}

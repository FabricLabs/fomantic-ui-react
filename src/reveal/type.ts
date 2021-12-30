import { CommonProps } from '../common';

export interface RevealProps extends CommonProps {
  /**
   * 动画类型
   */
  animated: 'fade' | 'move' | 'move right' | 'move up' | 'move down' | 'rotate' | 'rotate left';
  /**
   * 小尺寸
   */
  small?: boolean;
  /**
   * 图片
   */
  image?: boolean;
  /**
   * 圆形
   */
  circular?: boolean;
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 瞬间
   */
  instant?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
}

export interface RevealContentProps extends CommonProps {
  /**
   * 交互前可见的内容
   */
  visible?: boolean;
  /**
   * 交互前隐藏的内容
   */
  hidden?: boolean;
}

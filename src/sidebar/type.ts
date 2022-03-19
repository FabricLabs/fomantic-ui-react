import { ElementProps, ModuleProps } from '../common';

export interface SidebarProps extends ModuleProps {
  /**
   * 反转
   */
  inverted?: boolean;
  /**
   * 垂直排列
   */
  vertical?: boolean;
  /**
   * 方向
   */
  direction?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * 可见
   */
  visible?: boolean;
  /**
   * 动画
   */
  animation?: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along';
}

export interface SidebarPushableProps extends ElementProps {}

export interface SidebarPusherProps extends ElementProps {
  /**
   * 变暗淡
   */
  dimmed?: boolean;
}

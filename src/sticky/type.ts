import { Ref, RefObject } from 'react';
import { ModuleProps } from '../common';

export interface StickyProps extends ModuleProps {
  /**
   * 上下文
   */
  context?: RefObject<HTMLDivElement>;
  /**
   * 设置尺寸
   */
  setSize?: boolean;
  /**
   * 推动；在向上滚动时附着到屏幕的底部
   */
  pushing?: boolean;
  /**
   * 顶部偏移
   */
  topOffset?: number;
  /**
   * 底部偏移
   */
  bottomOffset?: number;
}

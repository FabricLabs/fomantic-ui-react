import { ElementType } from 'react';
import { ElementProps } from '../common';

export interface SpanProps extends ElementProps {
  /**
   * 标签名称
   * @default span
   */
  as?: ElementType;
  /**
   * 浮动
   */
  floated?: 'left' | 'right';
}

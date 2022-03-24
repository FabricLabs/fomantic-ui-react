import { Ref, RefObject } from 'react';
import { ModuleProps } from '../common';

export interface StickyProps extends ModuleProps {
  /**
   * 上下文
   */
  context?: RefObject<HTMLDivElement>;
}

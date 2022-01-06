import { ElementProps } from '../common';

export interface DivProps extends ElementProps {
  /**
   * 浮动
   */
  floated?: 'left' | 'right';
  /**
   * 标题
   */
  header?: boolean;
  /**
   * 元数据
   */
  meta?: boolean;
  /**
   * 描述
   */
  description?: boolean;
  /**
   * 附加
   */
  extra?: boolean;
}

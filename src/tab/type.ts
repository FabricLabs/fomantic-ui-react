import { FNode, ModuleProps } from '../common';

export interface TabProps extends ModuleProps {
  /**
   * 样式
   */
  type?: 'card' | 'line' | 'button';
  /**
   * 内容边框
   */
  segment?: boolean;
}

export interface TabPaneProps extends ModuleProps {
  /**
   * 选项卡头显示内容
   */
  tab?: FNode;
  /**
   * 激活
   */
  active?: boolean;
}

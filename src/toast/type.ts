import { SyntheticEvent } from 'react';
import { AttachNode, FNode, ModuleProps } from '../common';

export type ToastThemeList = 'success' | 'info' | 'warning' | 'error' | 'neutral';

export type ToastPositionList =
  | 'top right'
  | 'top center'
  | 'top left'
  | 'top attached'
  | 'bottom right'
  | 'bottom center'
  | 'bottom left'
  | 'bottom attached';

export interface ToastInstance {
  close: () => void;
}

interface BaseProps {
  /**
   * 信息内容
   */
  message?: FNode;
  /**
   * 标题
   */
  title?: string;
  /**
   * 按钮执行操作
   */
  actions?: Array<Action>;
  /**
   * 主题
   */
  theme?: ToastThemeList;
  /**
   * 显示关闭图标
   */
  closeIcon?: boolean;
  /**
   * 固定宽度
   */
  compact?: boolean;
  /**
   * 显示时间
   */
  displayTime?: number;
  /**
   * 唯一标识符
   */
  id?: string;
  /**
   * 点击关闭时触发
   */
  onCloseClick?: (context: { e: SyntheticEvent }) => void;
}

export interface ToastProps extends BaseProps, ModuleProps {}

interface ContainerProps {
  /**
   * 位置
   */
  position?: ToastPositionList;
  /**
   * 指定消息通知挂载的父节点。
   * 数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   */
  context?: AttachNode;
  /**
   * 最新通知从上插入
   */
  newestOnTop?: boolean;
  /**
   * 显示层级
   * @default 9999
   */
  zIndex?: number;
}

export interface ToastContainerProps extends ContainerProps, ModuleProps {}

type Action = {
  text: string;
  class?: string;
  click?: () => void;
};

export interface ArgsProps extends BaseProps, ContainerProps {}

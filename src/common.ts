import { ReactElement, ReactNode, CSSProperties, FormEvent, ElementType } from 'react';

export type FElement = ReactElement | (() => ReactElement);

export type FNode<T = undefined> = T extends undefined ? ReactNode : (props: T) => ReactNode;

export type AttachNodeReturnValue = HTMLElement | Element | Document;

export type AttachNode = CSSSelector | (() => AttachNodeReturnValue);

// 与滚动相关的容器类型，因为 document 上没有 scroll 相关属性, 因此排除document
export type ScrollContainerElement = Window | HTMLElement;
export type ScrollContainer = (() => ScrollContainerElement) | CSSSelector;

export type FormResetEvent = FormEvent<HTMLFormElement>;
export type FormSubmitEvent = FormEvent<HTMLFormElement>;

export type Styles = CSSProperties;

export interface StyledProps {
  /**
   * HTML 标签 class 属性值
   */
  className?: string;
  /**
   * HTML 标签 style 属性值
   */
  style?: CSSProperties;
}

export type OptionData = {
  label?: string;
  value?: string | number;
} & { [key: string]: any };

export type TreeOptionData = {
  children?: Array<TreeOptionData>;
} & OptionData;

export type ClassName = { [className: string]: any } | ClassName[] | string;

export type CSSSelector = string;

export interface KeysType {
  value?: string;
  label?: string;
}

export interface timeShape {
  /**
   * 显示持续时间；单位：ms
   */
  show: number;
  /**
   * 隐藏持续时间；单位：ms
   */
  hide: number;
}

export interface CommonProps extends StyledProps {
  /**
   * 标签或组件名称
   */
  as?: ElementType;
  children?: FNode;
}

export interface ElementProps extends CommonProps {
  /**
   * 内容
   */
  content?: FNode | boolean;
}

export interface CollectionProps extends CommonProps {}

export interface ViewProps extends CommonProps {}

export interface ModuleProps extends CommonProps {}

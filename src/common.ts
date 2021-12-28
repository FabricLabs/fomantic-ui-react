import { ReactElement, ReactNode, CSSProperties, FormEvent } from 'react';

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
  className?: string;
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

export interface CommonProps {
  /**
   * 标签名称
   * @default div
   */
  as?: string;
  /**
   * class 属性
   */
  className?: string;
  /**
   * 标签内容
   */
  content?: FNode;
  /**
   * 内容，同 content
   */
  children?: FNode;
}

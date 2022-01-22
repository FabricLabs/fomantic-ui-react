import React from 'react';
import { FNode } from 'src/common';

export const { isValidElement } = React;

type AnyObject = Record<any, any>;

type RenderProps = undefined | AnyObject | ((originProps: AnyObject) => AnyObject | undefined);

export const replaceElement = (
  element: React.ReactNode,
  replacement: React.ReactNode,
  props: RenderProps,
): React.ReactNode => {
  if (!isValidElement(element)) return replacement;

  return React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
};

export const cloneElement = (element: React.ReactNode, props?: RenderProps): React.ReactElement => {
  return replaceElement(element, element, props) as React.ReactElement;
};

export const isNil = (children: FNode) =>
  children === null || children === undefined || (Array.isArray(children) && children.length === 0);

import React, { Component, Fragment, FunctionComponent, PureComponent } from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbDivider from './BreadcrumbDivider';
import { BreadcrumbProps } from './type';
import { toArray } from 'lodash';
import { cloneElement } from '../_util/reactNode';

const Breadcrumb = ({ as = 'div', divider = ' / ', className, children, ...props }: BreadcrumbProps) => {
  const classNames = ['ui', 'breadcrumb'];

  if (className) {
    classNames.push(className);
  }

  let crumbs: React.ReactNode;

  if (children && divider) {
    crumbs = toArray(children).map((element: any, index) => {
      if (!element) {
        return element;
      }

      let separator: React.ReactNode;

      if (toArray(children).length - 1 !== index) {
        if (typeof divider === 'string') {
          separator = <BreadcrumbDivider>{divider}</BreadcrumbDivider>;
        } else {
          separator = <BreadcrumbDivider as={divider.type} {...divider.props} />;
        }
      }

      return (
        <Fragment key={index}>
          {cloneElement(element)}
          {separator}
        </Fragment>
      );
    });
  } else {
    crumbs = children;
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, crumbs);
};

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Divider = BreadcrumbDivider;

export default Breadcrumb;

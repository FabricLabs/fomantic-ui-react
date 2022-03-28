import React, { Children, cloneElement, createElement, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import TabPane from './TabPane';
import { TabProps, TabPaneProps } from './type';
import { isNil, isValidElement } from '../_util/reactNode';

const Tab = ({ as = 'div', className, type = 'card', segment = true, children, ...props }: TabProps) => {
  const [activeKey, setActiveKey] = useState(0);

  if (!as) {
    as = 'div';
  }

  let tabs;

  if (!isNil(children)) {
    tabs = Children.map(children, (child, i) => {
      if (isValidElement(child) && child.type === TabPane) {
        const { tab: tabLabel, active } = child.props as TabPaneProps;

        useEffect(() => {
          if (active) {
            setActiveKey(i);
          }
        }, []);

        return createElement(
          'a',
          {
            key: i,
            className: classNames('item', { active: activeKey === i }),
            onClick: () => {
              setActiveKey(i);
            },
          },
          tabLabel,
        );
      } else {
        return child;
      }
    });

    children = Children.map(children, (child, i) => {
      if (isValidElement(child) && child.type === TabPane) {
        return cloneElement(child, {
          key: i,
          active: activeKey === i,
          className: classNames({ 'bottom attached': type === 'card', segment }, child.props.className),
        } as TabPaneProps);
      } else {
        return child;
      }
    });
  }

  const tabMenu = createElement(
    as,
    {
      className: classNames(
        'ui',
        {
          'top attached tabular': type === 'card',
          pointing: type === 'line',
          secondary: type === 'button' || type === 'line',
        },
        'menu',
        className,
      ),
      ...props,
    },
    tabs,
  );

  return (
    <Fragment>
      {tabMenu}
      {children}
    </Fragment>
  );
};

Tab.displayName = 'Tab';
Tab.Pane = TabPane;

export default Tab;

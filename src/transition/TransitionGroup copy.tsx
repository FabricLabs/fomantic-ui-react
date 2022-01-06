import React, { Children, createElement, isValidElement, ReactNode, useEffect, useState } from 'react';
import { TransitionGroupProps } from './type';
import Transition from '.';
import _ from 'lodash';

const TransitionGroup = ({
  as = 'div',
  animation = 'fade',
  duration = 500,
  className,
  children,
  ...props
}: TransitionGroupProps) => {
  const [preChildren, setPreChildren] = useState(children);
  const [count, setCount] = useState(Children.count(preChildren));

  useEffect(() => {
    if (count !== Children.count(children)) {
      // if (count > Children.count(children)) {
      //   setTimeout(() => {
      //     setPreChildren(children);
      //   }, 3000);
      // } else {
      //   setPreChildren(children);
      // }

      setPreChildren(children);
      setCount(Children.count(children));
    }
  });

  if (children) {
    if (count <= Children.count(children)) {
      children = Children.map(children, (child) => {
        if (isValidElement(child)) {
          let visibleCurrent = true;

          if (count < Children.count(children) && _.last(_.toArray(children)) === child) {
            visibleCurrent = false;
          }

          return (
            <Transition
              key={child.key}
              as={child.type}
              animation={animation}
              duration={duration}
              visible={visibleCurrent}
              {...child.props}
            />
          );
        }
      });
    } else {
      children = Children.map(preChildren, (child) => {
        if (isValidElement(child)) {
          let visibleCurrent = true;

          if (count > Children.count(children) && _.last(_.toArray(preChildren)) === child) {
            visibleCurrent = false;
          }

          return (
            <Transition
              key={child.key}
              as={child.type}
              animation={animation}
              duration={duration}
              visible={visibleCurrent}
              {...child.props}
            />
          );
        }
      });
    }

    console.log(children);
  }

  return createElement(as, { className, ...props }, children);
};

TransitionGroup.displayName = 'TransitionGroup';

export default TransitionGroup;

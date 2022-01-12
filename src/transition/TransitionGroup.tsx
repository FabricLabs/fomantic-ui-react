import React, { Children, createElement, isValidElement, useMemo, useRef } from 'react';
import { TransitionGroupProps } from './type';
import Transition from './Transition';
import _ from 'lodash';

const TransitionGroup = ({
  as = 'div',
  animation = 'fade',
  duration = 500,
  className,
  children,
  ...props
}: TransitionGroupProps) => {
  const childRefs = useRef();

  /*     useLayoutEffect(() => {
      Children.forEach(children, (child) => {
        if (isValidElement(child)) {
          const { key } = child;
          if (typeof key === 'string') {
            childRefs.current[key];
          }
        }
      });
    }, [children]); */

  return useMemo(() => {
    const childrenToRender = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return <Transition ref={childRefs} as={child.type} key={child.key} {...child.props} />;
      }
    });
    return createElement(as, { className, ...props }, childrenToRender);
  }, [children]);
};

TransitionGroup.displayName = 'TransitionGroup';

export default TransitionGroup;

/* const TransitionGroup = ({
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

export default TransitionGroup; */

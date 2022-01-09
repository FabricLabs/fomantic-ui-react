import classNames from 'classnames';
import React, { Children, ElementType, isValidElement, useEffect, useState } from 'react';
import _ from 'lodash';
import TweenOne from 'rc-tween-one';
import type { IAnimType } from 'tween-one';
import { AccordionContentProps } from './type';
import Transition from '../transition';

const AccordionContent = ({
  as = 'div',
  active,
  duration = 300,
  className,
  style,
  content,
  children,
  ...props
}: AccordionContentProps) => {
  if (!as) {
    as = 'div';
  }

  const [paused, setPaused] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [moment, setMoment] = useState<number | undefined>(0);
  const [toggle, setToggle] = useState(active);
  const [start, setStart] = useState(false);
  const [type, setType] = useState<IAnimType>('to');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setStart(true);
    setType(active ? 'to' : 'from');
  }, []);

  useEffect(() => {
    setToggle(active);
  }, [active]);

  useEffect(() => {
    if (start) {
      if (type === 'to' ? !active : active) {
        setPaused(false);
        setReverse(false);
      } else {
        setPaused(false);
        setReverse(true);
        setTimeout(() => {
          setMoment(undefined);
          setTimeout(() => {
            setMoment(0);
          });
        }, duration);
      }
    }
  }, [toggle]);

  children = children || content;

  if (typeof children !== 'string' && Children.count(children) > 0) {
    children = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return (
          <Transition
            key={child.key}
            as={child.type as ElementType}
            duration={duration}
            animation="fade"
            visible={active}
            {...child.props}
          />
        );
      }
    });
  }

  return (
    <TweenOne
      animation={{
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
        duration,
        type,
        onStart: () => {
          setVisible(type === 'to');
        },
        onComplete: () => {
          setVisible(type !== 'to');
        },
      }}
      paused={paused}
      reverse={reverse}
      moment={moment}
      component={as}
      componentProps={{
        className: classNames('content', { active: active || visible }, className),
        style: { overflow: 'hidden', ...style },
        ...props,
      }}
    >
      {children}
    </TweenOne>
  );
};

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;

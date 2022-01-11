import { createElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { TransitionProps } from './type';
import TransitionGroup from './TransitionGroup';
import forwardRefWithStatics from '../_util/forwardRefWithStatics';

const Transition = forwardRefWithStatics<TransitionProps, HTMLDivElement>(
  (
    {
      as = 'div',
      visible = true,
      animation = 'fade',
      duration = 500,
      className,
      children,
      onShow,
      onHide,
      onStart,
      onComplete,
      ...props
    },
    ref,
  ) => {
    const [start, setStart] = useState(true);
    const [update, setUpdate] = useState(false);
    const [css, setCss] = useState('');
    const [style, setStyle] = useState({});

    const handleStart = () => {
      setCss(visible ? 'visible' : 'hidden');
    };

    useEffect(() => {
      handleStart();
      setStart(false);
    }, []);

    useEffect(() => {
      if (!start) {
        setUpdate(true);
        if (typeof onStart === 'function') {
          onStart();
        }
        if (typeof duration === 'number') {
          if (typeof animation === 'string') {
            setCss(`${animation} ${visible ? 'in' : 'out'}`);
          } else {
            setCss(visible ? `${animation.show} in` : `${animation.hide} out`);
          }
          setStyle({ animationDuration: `${duration}ms` });
          setTimeout(() => {
            setUpdate(false);
            if (visible) {
              if (typeof onShow === 'function') {
                onShow();
              }
            } else {
              if (typeof onHide === 'function') {
                onHide();
              }
            }
            if (typeof onComplete === 'function') {
              onComplete();
            }
          }, duration);
        } else {
          if (visible) {
            setCss(`${typeof animation === 'string' ? animation : animation.show} in`);
            setStyle({ animationDuration: `${duration.show}ms` });
            setTimeout(() => {
              setUpdate(false);
              if (typeof onShow === 'function') {
                onShow();
              }
              if (typeof onComplete === 'function') {
                onComplete();
              }
            }, duration.show);
          } else {
            setCss(`${typeof animation === 'string' ? animation : animation.hide} out`);
            setStyle({ animationDuration: `${duration.hide}ms` });
            setTimeout(() => {
              setUpdate(false);
              if (typeof onHide === 'function') {
                onHide();
              }
              if (typeof onComplete === 'function') {
                onComplete();
              }
            }, duration.hide);
          }
        }
      }
    }, [visible]);

    useEffect(() => {
      if (!update) {
        handleStart();
        setStyle({});
      }
    }, [update]);

    return createElement(
      as,
      {
        ref,
        className: classNames('transition', css, className),
        style: { ...style, ...props.style },
        ..._.omit(props, 'style'),
      },
      children,
    );
  },
  {
    Group: TransitionGroup,
  },
);

Transition.displayName = 'Transition';

export default Transition;

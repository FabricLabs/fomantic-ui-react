import { createElement, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { omit } from 'lodash';
import { TransitionProps } from './type';
import TransitionGroup from './TransitionGroup';
import forwardRefWithStatics from '../_util/forwardRefWithStatics';

const Transition = forwardRefWithStatics(
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
    }: TransitionProps,
    ref: any,
  ) => {
    const [start, setStart] = useState(true);
    const [update, setUpdate] = useState(false);
    const [css, setCss] = useState('');
    const [style, setStyle] = useState({});

    const transitionRef = useRef();

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
          setCss(`${animation} ${visible ? 'in' : 'out'}`);
          setStyle({ animationDuration: `${duration}ms` });
          setTimeout(() => {
            setUpdate(false);
            if (typeof onShow === 'function') {
              onShow();
            }
            if (typeof onHide === 'function') {
              onHide();
            }
            if (typeof onComplete === 'function') {
              onComplete();
            }
          }, duration);
        } else {
          if (visible) {
            setCss(`${animation} in`);
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
            setCss(`${animation} out`);
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
        ref: ref || transitionRef,
        className: classnames('transition', css, className),
        style: { ...style, ...props.style },
        ...omit(props, 'style'),
      },
      children,
    );
  },
  { Group: TransitionGroup },
);

Transition.displayName = 'Transition';

export default Transition;

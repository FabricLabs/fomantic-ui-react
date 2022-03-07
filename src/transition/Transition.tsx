import { createElement, CSSProperties, useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { TransitionProps } from './type';

const Transition = ({
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
}: TransitionProps) => {
  const [start, setStart] = useState(true);
  const [update, setUpdate] = useState(false);
  const [css, setCss] = useState('');
  const [style, setStyle] = useState<CSSProperties>({});
  const [animating, setAnimating] = useState(false);

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
      setAnimating(true);
      if (typeof onStart === 'function') {
        onStart();
      }
      if (typeof duration === 'number') {
        if (typeof animation === 'string') {
          setCss(`${animation} ${visible ? 'in' : 'out'}`);
        } else {
          setCss(visible ? `${animation.show} in` : `${animation.hide} out`);
        }
        setStyle({ animationDuration: `${duration}ms`, display: 'block' });
        setTimeout(() => {
          setUpdate(false);
          setAnimating(false);
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
          setStyle({ animationDuration: `${duration.show}ms`, display: 'block' });
          setTimeout(() => {
            setUpdate(false);
            setAnimating(false);
            if (typeof onShow === 'function') {
              onShow();
            }
            if (typeof onComplete === 'function') {
              onComplete();
            }
          }, duration.show);
        } else {
          setCss(`${typeof animation === 'string' ? animation : animation.hide} out`);
          setStyle({ animationDuration: `${duration.hide}ms`, display: 'block' });
          setTimeout(() => {
            setUpdate(false);
            setAnimating(false);
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
      className: classNames('transition', { animating }, css, className),
      style: { ...style, ...props.style },
      ..._.omit(props, 'style'),
    },
    children,
  );
};

Transition.displayName = 'Transition';

export default Transition;

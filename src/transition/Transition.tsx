import { createElement, useEffect, useState } from 'react';
import { TransitionProps } from './type';

const Transition = (resetProps: TransitionProps) => {
  const {
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
  } = resetProps;
  const [start, setStart] = useState(true);
  const [update, setUpdate] = useState(false);
  const [css, setCss] = useState('');
  const [style, setStyle] = useState({});

  const handleStart = () => {
    if (visible) {
      setCss('visible');
    } else {
      setCss('hidden');
    }
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

  const classNames = ['transition'];

  classNames.push(css);

  if (className) {
    classNames.push(className);
  }

  return createElement(
    as,
    { className: classNames.join(' '), style: { ...style, ...props['style'] }, ...props },
    children,
  );
};

Transition.displayName = 'Transition';

export default Transition;

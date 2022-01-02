import { createElement, useEffect, useState } from 'react';
import { TransitionProps } from './type';

const Transition = ({
  as = 'div',
  visible = true,
  animation = 'fade',
  duration = 500,
  className,
  children,
  ...props
}: TransitionProps) => {
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
      if (visible) {
        setCss(`${animation} in`);
        if (typeof duration !== 'number') {
          setStyle({ animationDuration: `${duration.show}ms` });
          setTimeout(() => {
            setUpdate(false);
          }, duration.show);
        }
      } else {
        setCss(`${animation} out`);
        if (typeof duration !== 'number') {
          setStyle({ animationDuration: `${duration.hide}ms` });
          setTimeout(() => {
            setUpdate(false);
          }, duration.hide);
        }
      }
      if (typeof duration === 'number') {
        setStyle({ animationDuration: `${duration}ms` });
        setTimeout(() => {
          setUpdate(false);
        }, duration);
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

import { Children, cloneElement, createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ShapeSidesProps, ShapeSideProps } from './type';
import { useMap } from 'react-use';
import { isNil, isValidElement } from '../_util/reactNode';

const ShapeSides = ({
  as = 'div',
  className,
  behavior,
  change,
  duration,
  width,
  height,
  children,
  ...props
}: ShapeSidesProps) => {
  const [isChange, setIsChange] = useState(change);
  const [styles, { set }] = useMap<CSSProperties>();
  const [activeStyle, { set: setActiveStyle }] = useMap<CSSProperties>();
  const [nextStyle, { set: setNextStyle }] = useMap<CSSProperties>();
  const [sideStyle, { set: setSideStyle }] = useMap<CSSProperties>();
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenIndex, setHiddenIndex] = useState(-1);

  const nextActive = () => {
    const count = Children.count(children);
    return activeIndex < count - 1 ? activeIndex + 1 : 0;
  };

  useEffect(() => {
    setIsChange(change);
  }, [change]);

  useEffect(() => {
    if (isChange) {
      if (behavior === 'flip up') {
        set('transform', `translateY(${height! / 2}px) translateZ(-${height! / 2}px) rotateX(-90deg)`);
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateX(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('top', '0px');
        setNextStyle('transform', `rotateX(90deg) translateZ(${height! / 2}px) translateY(-${height! / 2}px)`);
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      } else if (behavior === 'flip down') {
        set('transform', `translateY(-${height! / 2}px) translateZ(-${height! / 2}px) rotateX(90deg)`);
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateX(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('top', '0px');
        setNextStyle('transform', `rotateX(-90deg) translateZ(${height! / 2}px) translateY(${height! / 2}px)`);
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      } else if (behavior === 'flip left') {
        set('transform', `translateX(${width! / 2}px) translateZ(-${width! / 2}px) rotateY(90deg)`);
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateY(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('top', '0px');
        setNextStyle('transform', `rotateY(-90deg) translateZ(${width! / 2}px) translateX(-${width! / 2}px)`);
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      } else if (behavior === 'flip right') {
        set('transform', `translateX(-${width! / 2}px) translateZ(-${width! / 2}px) rotateY(-90deg)`);
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateY(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('top', '0px');
        setNextStyle('transform', `rotateY(90deg) translateZ(${width! / 2}px) translateX(${width! / 2}px)`);
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      } else if (behavior === 'flip over') {
        set('transform', 'translateX(0px) rotateY(180deg)');
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateY(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('left', '0px');
        setNextStyle('transform', 'rotateY(-180deg)');
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      } else if (behavior === 'flip back') {
        set('transform', 'translateX(0px) rotateY(-180deg)');
        set('transitionDuration', `${duration}ms`);
        setActiveStyle('transform', 'rotateY(0deg)');
        setActiveStyle('transitionDuration', `${duration}ms`);
        setNextStyle('left', '0px');
        setNextStyle('transform', 'rotateY(-180deg)');
        setNextStyle('transitionDuration', `${duration}ms`);
        setSideStyle('transitionDuration', `${duration}ms`);
      }
      setHiddenIndex(activeIndex);
      setAnimatingIndex(nextActive());
      setTimeout(() => {
        setHiddenIndex(-1);
        setAnimatingIndex(-1);
        setActiveIndex(nextActive());
        if (
          behavior === 'flip up' ||
          behavior === 'flip down' ||
          behavior === 'flip left' ||
          behavior === 'flip right' ||
          behavior === 'flip over' ||
          behavior === 'flip back'
        ) {
          set('transform', undefined);
          set('transitionDuration', undefined);
          setActiveStyle('transform', undefined);
          setActiveStyle('transitionDuration', undefined);
          setNextStyle('top', undefined);
          setNextStyle('left', undefined);
          setNextStyle('transform', undefined);
          setNextStyle('transitionDuration', undefined);
          setSideStyle('transitionDuration', undefined);
        }
        setIsChange(false);
      }, duration);
    }
  }, [isChange]);

  if (!as) {
    as = 'div';
  }

  let itemChildren;

  if (isNil(children)) {
  } else {
    itemChildren = Children.map(children, (childItem, i) => {
      if (isValidElement(childItem)) {
        const childItemProps = childItem.props as ShapeSideProps;

        useEffect(() => {
          if (childItemProps.active) {
            setActiveIndex(i);
          }
        }, []);

        return cloneElement(childItem, {
          key: i,
          active: activeIndex === i,
          hidden: hiddenIndex === i,
          className: classNames({ animating: animatingIndex === i }),
          style: activeIndex === i ? activeStyle : nextActive() === i ? nextStyle : sideStyle,
        } as ShapeSideProps);
      }
    });
  }

  return createElement(
    as,
    { className: classNames('sides', className), style: { ...props.style, ...styles }, ...props },
    itemChildren,
  );
};

ShapeSides.displayName = 'ShapeSides';

export default ShapeSides;

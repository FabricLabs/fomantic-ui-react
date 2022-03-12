import React, { createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useMap } from 'react-use';
import { ShapeProps } from './type';
import ShapeSides from './ShapeSides';
import ShapeSide from './ShapeSide';

const Shape = ({ as = 'div', className, type, duration = 700, change, ...props }: ShapeProps) => {
  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hiddenIndex, setHiddenIndex] = useState(-1);
  const [styles, { set: setStyle }] = useMap<CSSProperties>();
  const [sidesStyles, { set: setSidesStyle }] = useMap<CSSProperties>();
  const [activeSideStyles, { set: setActiveSideStyle }] = useMap<CSSProperties>();
  const [nextSideStyles, { set: setNextSideStyle }] = useMap<CSSProperties>();
  const [sideStyles, { set: setSideStyle }] = useMap<CSSProperties>();
  const ref = useRef<HTMLDivElement>(null);
  const [isChange, setIsChange] = useState(change);

  useEffect(() => {
    setIsChange(change);
  }, [change]);

  useEffect(() => {
    if (isChange) {
      setAnimating(true);
      setStyle('width', `${ref.current?.offsetWidth}px`);
      setStyle('height', `${ref.current?.offsetHeight}px`);
      setSidesStyle('transform', 'translateY(11.5703px) translateZ(-11.5703px) rotateX(-90deg)');
      setSidesStyle('transitionDuration', `${duration}ms`);
      setActiveSideStyle('transform', 'rotateX(0deg)');
      setActiveSideStyle('transitionDuration', `${duration}ms`);
      setNextSideStyle('top', '0px');
      setNextSideStyle('transform', 'rotateX(90deg) translateZ(11.5703px) translateY(-11.5703px)');
      setNextSideStyle('transitionDuration', `${duration}ms`);
      setSideStyle('transitionDuration', `${duration}ms`);
      setHiddenIndex(0);
      setTimeout(() => {
        setAnimating(false);
        setHiddenIndex(-1);
        setActiveIndex(1);
        setStyle('width', undefined);
        setStyle('height', undefined);
        setSidesStyle('transform', undefined);
        setSidesStyle('transitionDuration', undefined);
        setActiveSideStyle('transform', undefined);
        setActiveSideStyle('transitionDuration', undefined);
        setNextSideStyle('top', undefined);
        setNextSideStyle('transform', undefined);
        setNextSideStyle('transitionDuration', undefined);
        setSideStyle('transitionDuration', undefined);
      }, duration);
    }
  }, [isChange]);

  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames('ui', type && { [type]: type }, 'shape', { animating }, className),
      style: { ...props.style, ...styles },
      ...props,
    },
    <>
      <div className="sides" ref={ref} style={sidesStyles}>
        <div
          className={classNames('ui', 'header', 'side', {
            active: activeIndex === 0,
            hidden: hiddenIndex === 0,
          })}
          style={activeSideStyles}
        >
          Did you know? This side starts visible.
        </div>
        <div
          className={classNames('ui', 'header', 'side', {
            active: activeIndex === 1,
            hidden: hiddenIndex === 1,
            animating,
          })}
          style={nextSideStyles}
        >
          Help, its another side!
        </div>
        <div
          className={classNames('ui', 'header', 'side', { active: activeIndex === 2, hidden: hiddenIndex === 2 })}
          style={sideStyles}
        >
          This is the last side
        </div>
      </div>
    </>,
  );
};

Shape.displayName = 'Shape';
Shape.Sides = ShapeSides;
Shape.Side = ShapeSide;

export default Shape;

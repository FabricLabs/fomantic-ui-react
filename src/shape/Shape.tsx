import { Children, cloneElement, createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useMap } from 'react-use';
import { ShapeProps } from './type';
import ShapeSides from './ShapeSides';
import ShapeSide from './ShapeSide';
import { isNil, isValidElement } from '../_util/reactNode';
import { ShapeSidesProps } from '.';

const Shape = ({
  as = 'div',
  className,
  behavior,
  type,
  duration = 700,
  change,
  children,
  onStart,
  onComplete,
  ...props
}: ShapeProps) => {
  const [animating, setAnimating] = useState(false);
  const [styles, { set: setStyle }] = useMap<CSSProperties>();
  const ref = useRef<HTMLDivElement>(null);
  const [isChange, setIsChange] = useState(change);

  useEffect(() => {
    setIsChange(change);
    if (change) {
      onStart?.();
    }
  }, [change]);

  useEffect(() => {
    if (isChange) {
      setAnimating(true);
      setStyle('width', `${ref.current?.offsetWidth}px`);
      setStyle('height', `${ref.current?.offsetHeight}px`);
      setTimeout(() => {
        setAnimating(false);
        setStyle('width', undefined);
        setStyle('height', undefined);
        setIsChange(false);
        onComplete?.();
      }, duration);
    }
  }, [isChange]);

  if (!as) {
    as = 'div';
  }

  let sides;

  if (isNil(children)) {
    // code...
  } else {
    const child = Children.only(children);
    if (isValidElement(child)) {
      sides = cloneElement(child, {
        change: isChange,
        duration,
        behavior,
        width: ref.current?.offsetWidth,
        height: ref.current?.offsetHeight,
      } as ShapeSidesProps);
    }
  }

  return createElement(
    as,
    {
      ref,
      className: classNames('ui', type && { [type]: type }, 'shape', { animating }, className),
      style: { ...props.style, ...styles },
      ...props,
    },
    sides,
  );
};

Shape.displayName = 'Shape';
Shape.Sides = ShapeSides;
Shape.Side = ShapeSide;

export default Shape;

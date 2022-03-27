import React, { createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { useMap, useWindowScroll, useWindowSize } from 'react-use';
import { StickyProps } from './type';
import uniq from '../_util/classNamesUniq';

const Sticky = ({
  as = 'div',
  className,
  context,
  setSize = true,
  pushing,
  topOffset = 0,
  bottomOffset = 0,
  children,
  style,
  ...props
}: StickyProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [contextTop, setContextTop] = useState(0);
  const [contextHeight, setContextHeight] = useState(0);
  const [fixed, setFixed] = useState(false);
  const [bound, setBound] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [pushed, setPushed] = useState(false);
  const [styles, { set }] = useMap<CSSProperties>();
  const { x, y } = useWindowScroll();
  const { height: winH } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(ref.current?.scrollWidth || 0);
    setHeight(ref.current?.scrollHeight || 0);
    setCurrentTop(ref.current?.offsetTop || 0);
    setContextTop(context?.current?.offsetTop || 0);
    setContextHeight(context?.current?.scrollHeight || 0);
  }, []);

  useEffect(() => {
    if (contextHeight > 0) {
      console.log(y, contextTop + currentTop + height - winH);
      if (pushing && pushed) {
        if (y < contextTop + currentTop + height - winH) {
          setPushed(false);
        } else if (y < contextHeight + contextTop - winH) {
          setFixed(true);
          setTop(false);
          setBound(false);
          setBottom(true);
        } else {
          setBound(true);
          setBottom(true);
          setFixed(false);
          setTop(false);
          set('top', undefined);
          set('marginTop', undefined);
        }
      } else {
        if (_.inRange(y, contextTop + currentTop - topOffset - 10, contextHeight + contextTop - topOffset - height)) {
          setFixed(true);
          setTop(true);
          setBound(false);
          setBottom(false);
          set('top', topOffset);
          set('marginTop', 10);
          if (setSize) {
            set('width', width);
            set('height', height);
          }
        } else if (y > contextHeight + contextTop - topOffset - height) {
          setBound(true);
          setBottom(true);
          setFixed(false);
          setTop(false);
          set('top', undefined);
          set('marginTop', undefined);
          setPushed(true);
        } else {
          setFixed(false);
          setTop(false);
          setBound(false);
          setBottom(false);
          setPushed(false);
          set('top', undefined);
          set('marginTop', undefined);
          if (setSize) {
            set('width', undefined);
            set('height', undefined);
          }
        }
      }
    }
  }, [x, y, contextHeight, winH]);

  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      ref,
      className: uniq(classNames('ui', 'sticky', { fixed, bound, top, bottom }, className)),
      style: { ...style, ...styles },
      ...props,
    },
    children,
  );
};

Sticky.displayName = 'Sticky';

export default Sticky;

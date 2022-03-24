import React, { createElement, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useWindowScroll } from 'react-use';
import { StickyProps } from './type';
import uniq from '../_util/classNamesUniq';
import Div from '../div';

const Sticky = ({ as = 'div', className, context, children, ...props }: StickyProps) => {
  const { x, y } = useWindowScroll();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref);
    console.log('context=>', context);
  }, [x, y]);

  /*   useEffect(() => {
    console.log(context);
  }, []); */

  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    { ref, className: uniq(classNames('ui', 'sticky', className)), ...props },
    <>
      {children} - {x} - {y}
      <Div>dgg</Div>
    </>,
  );
};

Sticky.displayName = 'Sticky';

export default Sticky;

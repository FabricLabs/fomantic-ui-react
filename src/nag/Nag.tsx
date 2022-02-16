import classNames from 'classnames';
import React, { createElement, CSSProperties, useEffect, useRef, useState } from 'react';
import { useEffectOnce, useMap } from 'react-use';
import _ from 'lodash';
import Icon from '../icon';
import { NagProps } from './type';
import useRaf from '../_util/useRaf';

const Nag = ({ as = 'div', className, style, active, title, fixed, complete, children, ...props }: NagProps) => {
  const [action, setAction] = useState(false);
  const [isActive, setIsActive] = useState(active);
  const [height, setHeight] = useState(0);
  const [styles, { set }] = useMap<CSSProperties>();
  const [cssAbsolute, setCssAbsolute] = useState<CSSProperties>({
    display: 'block',
    position: 'absolute',
    top: '-999999px',
    bottom: 'auto',
  });

  const ref = useRef<HTMLElement>(null);

  const handleClose = () => {
    setIsActive(false);
  };

  if (!as) {
    as = 'div';
  }

  useEffectOnce(() => {
    setTimeout(() => {
      setHeight(ref.current!.offsetHeight);
    });
  });

  const [elapsed, start] = useRaf(500, 50, {
    end: () => {
      if (isActive === false) {
        set('display', undefined);
        complete?.();
      }
    },
  });

  useEffect(() => {
    if (height > 0) {
      setCssAbsolute({});
    }
    if (height > 0 && elapsed > 0) {
      set('display', 'block');
      set('height', elapsed * height);
      set('overflow', 'hidden');
      set('paddingTop', `${elapsed * 0.75}em`);
      set('paddingBottom', `${elapsed * 0.75}em`);
    }
    if (elapsed === 1 || elapsed === 0) {
      set('height', undefined);
      set('overflow', undefined);
      set('paddingTop', undefined);
      set('paddingBottom', undefined);
    }
  }, [height, elapsed]);

  useEffect(() => {
    if (action) {
      start(isActive);
    } else {
      setAction(true);
      if (isActive) {
        start(isActive);
      }
    }
  }, [isActive]);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const titleElement = title && <div className="title">{title}</div>;

  return createElement(
    as,
    {
      ref,
      className: classNames('ui', 'nag', { fixed, bottom: fixed === 'bottom' }, className),
      style: {
        ...style,
        ...cssAbsolute,
        ...styles,
      },
      ...props,
    },
    <>
      {titleElement}
      <div>{children}</div>
      <Icon name="close" onClick={handleClose} />
    </>,
  );
};

Nag.displayName = 'Nag';

export default Nag;

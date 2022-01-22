import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';
import type { DropdownMenuProps } from './type';
import Transition from '../transition';

const DropdownMenu = ({
  as = 'div',
  scrolling,
  scrollhint,
  animation = 'slide down',
  duration = 200,
  className,
  open,
  onStart,
  onShow,
  onHide,
  onComplete,
  children,
  ...props
}: DropdownMenuProps) => {
  const [style, setStyle] = useState<CSSProperties>({});

  if (!as) {
    as = 'div';
  }

  return (
    <Transition
      as={as}
      className={classNames('menu', { scrolling, scrollhint }, className)}
      visible={open}
      animation={animation}
      duration={duration}
      style={{ ...style, ...props.style }}
      onStart={() => {
        setStyle({ display: 'block' });
        onStart?.();
      }}
      onShow={() => {
        onShow?.();
      }}
      onHide={() => {
        onHide?.();
      }}
      onComplete={() => {
        setStyle({});
        onComplete?.();
      }}
    >
      {children}
    </Transition>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;

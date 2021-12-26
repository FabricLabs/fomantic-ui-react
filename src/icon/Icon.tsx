import React, { forwardRef, useRef } from 'react';
import { FIconProps } from './type';

const Icon = forwardRef(
  (
    {
      as = 'i',
      className,
      name,
      disabled,
      loading,
      fitted,
      link,
      circular,
      bordered,
      colored,
      color,
      inverted,
      flipped,
      rotated,
      size,
      ...iconProps
    }: FIconProps,
    ref: React.RefObject<HTMLButtonElement>,
  ) => {
    const iconRef = useRef();

    const classNames = ['icon', name];
    if (size) {
      classNames.push(size);
    }

    if (disabled) {
      classNames.push('disabled');
    }

    if (loading) {
      classNames.push('loading');
    }

    if (fitted) {
      classNames.push('fitted');
    }

    if (link) {
      classNames.push('link');
    }

    if (flipped) {
      if (flipped === 'horizontally') {
        classNames.push('horizontally flipped');
      } else if (flipped === 'vertically') {
        classNames.push('vertically flipped');
      }
    }

    if (rotated) {
      if (rotated === 'clockwise') {
        classNames.push('clockwise rotated');
      } else if (rotated === 'counterclockwise') {
        classNames.push('counterclockwise rotated');
      }
    }

    if (circular) {
      classNames.push('circular');
    }

    if (bordered) {
      classNames.push('bordered');
    }

    if (colored) {
      classNames.push('colored');
    }

    if (inverted) {
      classNames.push('inverted');
    }

    if (color) {
      classNames.push(color);
    }

    if (className) {
      classNames.push(className);
    }

    return React.createElement(as, { ref: ref || iconRef, className: classNames.join(' '), ...iconProps });
  },
);

Icon.displayName = 'Icon';

export default Icon;

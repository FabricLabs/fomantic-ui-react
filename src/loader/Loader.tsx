import React from 'react';
import { LoaderProps } from './type';

const Loader = ({
  as = 'div',
  className,
  text,
  inverted,
  indeterminate,
  active,
  disabled,
  inline,
  speed,
  color,
  styles,
  content,
  children,
  ...props
}: LoaderProps) => {
  const classNames = ['ui', 'loader'];

  if (text) {
    classNames.push('text');
  }

  if (inverted) {
    classNames.push('inverted');
  }

  if (indeterminate) {
    classNames.push('indeterminate');
  }

  if (active) {
    classNames.push('active');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (inline) {
    classNames.push('inline');
    if (typeof inline === 'string') {
      classNames.push(inline);
    }
  }

  if (speed) {
    classNames.push(speed);
  }

  if (color) {
    classNames.push(color);
  }

  if (styles) {
    classNames.push(styles);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Loader.displayName = 'Loader';

export default Loader;

import React from 'react';
import { HeaderProps } from './type';

const Header = ({
  as = 'div',
  className,
  content,
  sub,
  icon,
  disabled,
  dividing,
  block,
  inverted,
  floated,
  attached,
  textAlign,
  size,
  color,
  children,
  ...props
}: HeaderProps) => {
  if (as === '') {
    as = 'div';
  }

  const classNames = ['ui', 'header'];

  if (sub) {
    classNames.push('sub');
  }

  if (icon) {
    classNames.push('icon');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (dividing) {
    classNames.push('dividing');
  }

  if (block) {
    classNames.push('block');
  }

  if (inverted) {
    classNames.push('inverted');
  }

  if (floated) {
    classNames.push(floated);
  }

  if (attached) {
    classNames.push('attached');
    if (typeof attached === 'string') {
      classNames.push(attached);
    }
  }

  if (textAlign) {
    classNames.push(textAlign);
    classNames.push('aligned');
  }

  if (size) {
    classNames.push(size);
  }

  if (color) {
    classNames.push(color);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Header.displayName = 'Header';

export default Header;

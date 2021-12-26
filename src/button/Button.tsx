import React, { useRef } from 'react';
import forwardRefWithStatics from '../_util/forwardRefWithStatics';
import { FButtonProps } from './type';
import { Icon } from '../icon';
import ButtonContent from './ButtonContent';

export interface ButtonProps extends FButtonProps {}
// React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRefWithStatics(
  (
    {
      as = 'button',
      size,
      compact,
      disabled,
      animated,
      basic,
      color,
      icon,
      content,
      className,
      children,
      onClick = () => {},
      ...buttonProps
    }: ButtonProps,
    ref: React.RefObject<HTMLButtonElement>,
  ) => {
    const btnRef = useRef();

    const classNames = ['ui', 'button'];
    if (basic) {
      classNames.push('basic');
    }

    if (compact) {
      classNames.push('compact');
    }

    if (color) {
      classNames.push(color);
    }

    if (size) {
      classNames.push(size);
    }

    if (disabled) {
      classNames.push('disabled');
    }

    if (animated) {
      classNames.push('animated');
      if (typeof animated === 'string') {
        classNames.push(animated);
      }
    }

    if (icon) {
      classNames.push('icon');
      if (typeof icon === 'string') {
        children = <Icon name={icon} />;
      }
    }

    if (className) {
      classNames.push(className);
    }

    if (as === '') {
      as = 'button';
    }

    return React.createElement(
      as,
      {
        ref: ref || btnRef,
        onClick: !disabled ? onClick : undefined,
        className: classNames.join(' '),
        ...buttonProps,
      },
      children || content,
    );
  },
  { Content: ButtonContent },
);

Button.displayName = 'Button';

export default Button;

import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './type';
import { Icon } from '../icon';
import ButtonContent from './ButtonContent';

const Button = ({
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
  onClick,
  ...props
}: ButtonProps) => {
  className = classnames('ui', 'button', {
    basic,
    compact,
    [color as string]: color,
    [size as string]: size,
    disabled,
    animated,
    [animated as string]: animated && typeof animated === 'string',
    icon,
    className,
  });

  if (typeof icon === 'string') {
    children = <Icon name={icon} />;
  }

  return React.createElement(
    as,
    {
      onClick: !disabled ? onClick : undefined,
      className,
      ...props,
    },
    children || content,
  );
};

Button.displayName = 'Button';
Button.Content = ButtonContent;

export default Button;

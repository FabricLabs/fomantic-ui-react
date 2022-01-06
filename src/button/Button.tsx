import React, { createElement } from 'react';
import classNames from 'classnames';
import forwardRefWithStatics from '../_util/forwardRefWithStatics';
import { ButtonProps } from './type';
import { Icon } from '../icon';
import ButtonContent from './ButtonContent';

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
      onClick,
      ...props
    }: ButtonProps,
    ref: any,
  ) => {
    if (!as) {
      as = 'div';
    }

    if (typeof icon === 'string') {
      children = <Icon name={icon} />;
    }

    return createElement(
      as,
      {
        ref,
        onClick: !disabled ? onClick : undefined,
        className: classNames(
          'ui',
          'button',
          {
            basic,
            compact,
            [color as string]: color,
            [size as string]: size,
            disabled,
            animated,
            [animated as string]: animated && typeof animated === 'string',
            icon,
          },
          className,
        ),
        ...props,
      },
      children || content,
    );
  },
  {
    Content: ButtonContent,
  },
);

Button.displayName = 'Button';

export default Button;

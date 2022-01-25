import classNames from 'classnames';
import React, { createElement, MouseEvent, useState } from 'react';
import _ from 'lodash';
import { CheckboxProps } from './type';

const Checkbox = ({
  as = 'div',
  name,
  label,
  radio,
  checked,
  slider,
  toggle,
  readOnly,
  disabled,
  fitted,
  right,
  className,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  if (!as) {
    as = 'div';
  }

  const children = (
    <>
      <input
        type={radio ? 'radio' : 'checkbox'}
        className="hidden"
        name={name}
        tabIndex={0}
        checked={isChecked}
        disabled={disabled}
      />
      <label>{label}</label>
    </>
  );

  return createElement(
    as,
    {
      className: classNames(
        'ui',
        { radio, slider, toggle, 'read-only': readOnly, disabled, fitted, 'right aligned': right },
        'checkbox',
        { checked: isChecked },
        className,
      ),
      onClick: (e: MouseEvent<HTMLElement>) => {
        if (!readOnly && !disabled) {
          if (radio) {
            setIsChecked(true);
          } else {
            setIsChecked(!isChecked);
          }
        }
      },
      ...props,
    },
    children,
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;

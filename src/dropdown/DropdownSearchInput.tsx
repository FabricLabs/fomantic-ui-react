import classNames from 'classnames';
import _ from 'lodash';
import React, { ChangeEvent, forwardRef, KeyboardEvent, MouseEvent } from 'react';
import type { DropdownSearchInputProps } from './type';

const DropdownSearchInput = forwardRef<HTMLInputElement, DropdownSearchInputProps>(
  ({ autoComplete = 'off', type = 'text', value, tabIndex, onChange, className, style, ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
    };

    return (
      <input
        ref={ref}
        className={classNames('search', className)}
        type={type}
        autoComplete={autoComplete}
        value={value}
        tabIndex={tabIndex}
        aria-autocomplete="list"
        onChange={handleChange}
        onClick={handleClick}
        autoFocus
        {...props}
      />
    );
  },
);

DropdownSearchInput.displayName = 'DropdownSearchInput';

export default DropdownSearchInput;

import classNames from 'classnames';
import React, { createElement } from 'react';
import { SelectProps } from './type';
import { Icon } from '../icon';
import Dropdown from '../dropdown';

const Select = ({ as = 'div', placeholder, name, value, options = [], className, children, ...props }: SelectProps) => {
  if (!as) {
    as = 'div';
  }

  return (
    <Dropdown
      as={as}
      selection
      clearable
      placeholder={placeholder}
      name={name}
      value={value}
      options={options}
      {...props}
    />
  );
};

Select.displayName = 'Select';

export default Select;

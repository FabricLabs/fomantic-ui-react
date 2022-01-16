import classNames from 'classnames';
import React, { createElement } from 'react';
import { SelectProps } from './type';
import { Icon } from '../icon';

const Select = ({ as = 'div', placeholder, options = [], className, children, ...props }: SelectProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames('ui', 'selection', 'dropdown', className),
      'aria-expanded': 'false',
      role: 'listbox',
      tabindex: '0',
      ...props,
    },
    <>
      <div className="divider default text">- 请选择 -</div>
      <Icon name="dropdown" />
      <div className="menu transition">
        <div className="selected item">
          <span className="text">Afghanistan</span>
        </div>
        <div className="selected item">
          <span className="text">Afghanistan</span>
        </div>
      </div>
    </>,
  );
};

Select.displayName = 'Select';

export default Select;

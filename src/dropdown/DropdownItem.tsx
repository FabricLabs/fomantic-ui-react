import classNames from 'classnames';
import _ from 'lodash';
import React, { Children, createElement, isValidElement, useState } from 'react';
import Icon from '../icon';
import DropdownMenu from './DropdownMenu';
import type { DropdownItemProps } from './type';

const DropdownItem = ({
  as = 'div',
  active,
  selected,
  className,
  text,
  description,
  icon,
  value,
  unfilterable,
  children,
  ...props
}: DropdownItemProps) => {
  const [visible, setVisible] = useState(false);

  if (!as) {
    as = 'div';
  }

  let content;

  if (icon) {
    content = (
      <>
        {content}
        <Icon name={icon} />
      </>
    );
  }

  if (description) {
    content = (
      <>
        {content}
        <span className="description">{description}</span>
      </>
    );
  }

  if (text) {
    content = (
      <>
        {content}
        {text}
      </>
    );
  }

  if (children) {
    const dropdownMenu = _.filter(Children.toArray(children), { type: DropdownMenu });
    if (dropdownMenu.length === 1) {
      if (icon !== 'dropdown') {
        content = (
          <>
            {content}
            <Icon name="dropdown" />
          </>
        );
      }
      children = Children.map(children, (child) => {
        if (isValidElement(child) && child.type === DropdownMenu) {
          return <DropdownMenu open={visible} {...child.props} />;
        }
        return child;
      });
    }
  }

  return createElement(
    as,
    {
      className: classNames('item', { active, selected, unfilterable }, className),
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
      ...props,
    },
    <>
      {content}
      {children}
    </>,
  );
};

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;

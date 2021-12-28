import React from 'react';
import { ListIconProps } from './type';
import Icon from '../icon';

const ListIcon = ({ verticalAlign, ...props }: ListIconProps) => {
  const classNames = [];
  if (verticalAlign) {
    classNames.push(verticalAlign);
    classNames.push('aligned');
  }
  return <Icon className={classNames.join(' ')} {...props} />;
};

ListIcon.displayName = 'ListIcon';

export default ListIcon;

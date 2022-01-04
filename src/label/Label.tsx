import React from 'react';
import { LabelProps } from './type';
import LabelDetail from './LabelDetail';
import Icon from '../icon';

const Label = ({
  as = 'div',
  className,
  content,
  image,
  tag,
  icon,
  circular,
  attached,
  empty,
  basic,
  inverted,
  size,
  color,
  children,
  ...props
}: LabelProps) => {
  const classNames = ['ui', 'label'];

  if (image) {
    classNames.push('image');
  }

  if (tag) {
    classNames.push('tag');
  }

  if (icon === true) {
    classNames.push('icon');
  } else if (icon && typeof icon === 'string') {
    if (content) {
      content = (
        <>
          <Icon name={icon} />
          {content}
        </>
      );
    } else {
      children = (
        <>
          <Icon name={icon} />
          {content}
        </>
      );
    }
  }

  if (circular) {
    classNames.push('circular');
  }

  if (empty) {
    classNames.push('empty');
  }

  if (basic) {
    classNames.push('basic');
  }

  if (inverted) {
    classNames.push('inverted');
  }

  if (size) {
    classNames.push(size);
  }

  if (color) {
    classNames.push(color);
  }

  if (attached) {
    classNames.push(attached);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Label.displayName = 'Label';
Label.Detail = LabelDetail;

export default Label;

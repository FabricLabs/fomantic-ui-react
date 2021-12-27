import React from 'react';
import _ from 'lodash';
import { ImageProps } from './type';

const Image = ({
  as = 'img',
  className,
  wrapped,
  href,
  hidden,
  disabled,
  avatar,
  bordered,
  fluid,
  rounded,
  circular,
  centered,
  verticalAlign,
  size,
  ...props
}: ImageProps) => {
  const classNames = ['ui', 'image'];

  if (size) {
    classNames.push(size);
  }

  if (hidden) {
    classNames.push('hidden');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (avatar) {
    classNames.push('avatar');
  }

  if (bordered) {
    classNames.push('bordered');
  }

  if (fluid) {
    classNames.push('fluid');
  }

  if (rounded) {
    classNames.push('rounded');
  }

  if (circular) {
    classNames.push('circular');
  }

  if (centered) {
    classNames.push('centered');
  }

  if (verticalAlign) {
    classNames.push('aligned');
    classNames.push(verticalAlign);
  }

  if (className) {
    classNames.push(className);
  }

  if (as === '') {
    as = 'img';
  }

  if (wrapped) {
    as = 'div';
  }

  if (href) {
    as = 'a';
  }

  if (as === 'img') {
    return <img className={classNames.join(' ')} {...props} />;
  } else {
    const imgHTMLAttributes = [
      'alt',
      'crossOrigin',
      'decoding',
      'height',
      'loading',
      'referrerPolicy',
      'sizes',
      'src',
      'srcSet',
      'useMap',
      'width',
    ];
    const rootProps = {};
    const imgProps = {};
    _.forEach(props, (val: any, prop: string) => {
      if (_.includes(imgHTMLAttributes, prop)) {
        imgProps[prop] = val;
      } else {
        rootProps[prop] = val;
      }
    });
    return React.createElement(as, { className: classNames.join(' '), href, ...rootProps }, <img {...imgProps} />);
  }
};

Image.displayName = 'Image';

export default Image;

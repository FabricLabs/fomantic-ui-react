import classNames from 'classnames';
import React, { createElement } from 'react';
import { CommentAvatarProps } from './type';

const CommentAvatar = ({ as = 'div', src, className, children, ...props }: CommentAvatarProps) => {
  if (!as) {
    as = 'div';
  }

  if (src) {
    children = <img src={src} alt="Avatar" />;
  }

  return createElement(as, { className: classNames('avatar', className), ...props }, children);
};

CommentAvatar.displayName = 'CommentAvatar';

export default CommentAvatar;

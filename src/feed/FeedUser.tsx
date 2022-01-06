import classNames from 'classnames';
import { createElement } from 'react';
import { FeedUserProps } from './type';

const FeedUser = ({ as = 'a', className, content, children, ...props }: FeedUserProps) => {
  if (!as) {
    as = 'a';
  }

  return createElement(as, { className: classNames('user', className), ...props }, children || content);
};

FeedUser.displayName = 'FeedUser';

export default FeedUser;

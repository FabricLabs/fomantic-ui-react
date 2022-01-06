import classNames from 'classnames';
import { createElement } from 'react';
import { FeedLikeProps } from './type';

const FeedLike = ({ as = 'a', className, children, ...props }: FeedLikeProps) => {
  if (!as) {
    as = 'a';
  }

  return createElement(as, { className: classNames('like', className), ...props }, children);
};

FeedLike.displayName = 'FeedLike';

export default FeedLike;

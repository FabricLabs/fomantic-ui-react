import classNames from 'classnames';
import { createElement } from 'react';
import { FeedMetaProps } from './type';

const FeedMeta = ({ as = 'div', className, children, ...props }: FeedMetaProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('meta', className), ...props }, children);
};

FeedMeta.displayName = 'FeedMeta';

export default FeedMeta;

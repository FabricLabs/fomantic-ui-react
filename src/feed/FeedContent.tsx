import classNames from 'classnames';
import { createElement } from 'react';
import { FeedContentProps } from './type';

const FeedContent = ({ as = 'div', className, children, ...props }: FeedContentProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('content', className), ...props }, children);
};

FeedContent.displayName = 'FeedContent';

export default FeedContent;

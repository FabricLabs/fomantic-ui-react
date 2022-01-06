import classNames from 'classnames';
import { createElement } from 'react';
import { FeedEventProps } from './type';

const FeedEvent = ({ as = 'div', className, children, ...props }: FeedEventProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('event', className), ...props }, children);
};

FeedEvent.displayName = 'FeedEvent';

export default FeedEvent;

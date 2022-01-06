import classNames from 'classnames';
import { createElement } from 'react';
import { FeedSummaryProps } from './type';

const FeedSummary = ({ as = 'div', className, children, ...props }: FeedSummaryProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('summary', className), ...props }, children);
};

FeedSummary.displayName = 'FeedSummary';

export default FeedSummary;

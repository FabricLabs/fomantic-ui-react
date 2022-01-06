import classNames from 'classnames';
import { createElement } from 'react';
import { FeedDateProps } from './type';

const FeedDate = ({ as = 'div', className, content, children, ...props }: FeedDateProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('date', className), ...props }, children || content);
};

FeedDate.displayName = 'FeedDate';

export default FeedDate;

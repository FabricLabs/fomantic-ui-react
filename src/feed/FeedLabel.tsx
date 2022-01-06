import classNames from 'classnames';
import { createElement } from 'react';
import { FeedLabelProps } from './type';

const FeedLabel = ({ as = 'div', className, children, ...props }: FeedLabelProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('label', className), ...props }, children);
};

FeedLabel.displayName = 'FeedLabel';

export default FeedLabel;

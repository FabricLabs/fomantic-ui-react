import classNames from 'classnames';
import { createElement } from 'react';
import { FeedExtraProps } from './type';

const FeedExtra = ({ as = 'div', className, children, ...props }: FeedExtraProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('extra', className), ...props }, children);
};

FeedExtra.displayName = 'FeedExtra';

export default FeedExtra;

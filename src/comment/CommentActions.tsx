import classNames from 'classnames';
import { createElement } from 'react';
import { CommentActionsProps } from './type';

const CommentActions = ({ as = 'div', className, children, ...props }: CommentActionsProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('actions', className), ...props }, children);
};

CommentActions.displayName = 'CommentActions';

export default CommentActions;

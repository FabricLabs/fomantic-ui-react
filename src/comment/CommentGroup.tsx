import classNames from 'classnames';
import { createElement } from 'react';
import { CommentGroupProps } from './type';

const CommentGroup = ({ as = 'div', className, children, ...props }: CommentGroupProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'comments', className), ...props }, children);
};

CommentGroup.displayName = 'CommentGroup';

export default CommentGroup;

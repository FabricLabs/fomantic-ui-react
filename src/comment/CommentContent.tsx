import classNames from 'classnames';
import { createElement } from 'react';
import { CommentContentProps } from './type';

const CommentContent = ({ as = 'div', className, children, ...props }: CommentContentProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('content', className), ...props }, children);
};

CommentContent.displayName = 'CommentContent';

export default CommentContent;

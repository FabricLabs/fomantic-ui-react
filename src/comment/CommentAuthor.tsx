import classNames from 'classnames';
import { createElement } from 'react';
import { CommentAuthorProps } from './type';

const CommentAuthor = ({ as = 'div', className, content, children, ...props }: CommentAuthorProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('author', className), ...props }, children || content);
};

CommentAuthor.displayName = 'CommentAuthor';

export default CommentAuthor;

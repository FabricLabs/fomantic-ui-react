import classNames from 'classnames';
import { createElement } from 'react';
import { CommentTextProps } from './type';

const CommentText = ({ as = 'div', className, content, children, ...props }: CommentTextProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('text', className), ...props }, children || content);
};

CommentText.displayName = 'CommentText';

export default CommentText;

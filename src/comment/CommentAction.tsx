import classNames from 'classnames';
import { createElement } from 'react';
import { CommentActionProps } from './type';

const CommentAction = ({ as = 'a', className, content, children, ...props }: CommentActionProps) => {
  if (!as) {
    as = 'a';
  }

  return createElement(as, { className: classNames(className), ...props }, children || content);
};

CommentAction.displayName = 'CommentAction';

export default CommentAction;

import classNames from 'classnames';
import { createElement } from 'react';
import CommentAction from './CommentAction';
import CommentActions from './CommentActions';
import CommentAuthor from './CommentAuthor';
import CommentAvatar from './CommentAvatar';
import CommentContent from './CommentContent';
import CommentGroup from './CommentGroup';
import CommentMetadata from './CommentMetadata';
import CommentText from './CommentText';
import { CommentProps } from './type';

const Comment = ({ as = 'div', className, children, ...props }: CommentProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('comment', className), ...props }, children);
};

Comment.displayName = 'Comment';
Comment.Group = CommentGroup;
Comment.Avatar = CommentAvatar;
Comment.Content = CommentContent;
Comment.Author = CommentAuthor;
Comment.Metadata = CommentMetadata;
Comment.Text = CommentText;
Comment.Actions = CommentActions;
Comment.Action = CommentAction;

export default Comment;

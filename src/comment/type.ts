import { ElementProps, ViewProps } from '../common';

export interface CommentProps extends ViewProps {}

export interface CommentGroupProps extends ViewProps {}

export interface CommentAvatarProps extends ViewProps {
  /**
   * 指定图像的 URL
   */
  src?: string;
}

export interface CommentContentProps extends ViewProps {}

export interface CommentAuthorProps extends ElementProps {}

export interface CommentMetadataProps extends ElementProps {}

export interface CommentTextProps extends ElementProps {}

export interface CommentActionsProps extends ViewProps {}

export interface CommentActionProps extends ElementProps {}

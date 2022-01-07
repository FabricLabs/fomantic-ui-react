import classNames from 'classnames';
import { createElement } from 'react';
import { CommentMetadataProps } from './type';

const CommentMetadata = ({ as = 'div', className, content, children, ...props }: CommentMetadataProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('metadata', className), ...props }, children || content);
};

CommentMetadata.displayName = 'CommentMetadata';

export default CommentMetadata;

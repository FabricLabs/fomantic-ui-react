import { createElement } from 'react';
import { MessageItemProps } from './type';

const MessageItem = ({ as = 'li', className, children, ...props }: MessageItemProps) => {
  const classNames = [];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

MessageItem.displayName = 'MessageItem';

export default MessageItem;

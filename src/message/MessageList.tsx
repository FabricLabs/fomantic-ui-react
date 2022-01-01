import { createElement } from 'react';
import { MessageListProps } from './type';

const MessageList = ({ as = 'ul', className, children, ...props }: MessageListProps) => {
  const classNames = ['list'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

MessageList.displayName = 'MessageList';

export default MessageList;

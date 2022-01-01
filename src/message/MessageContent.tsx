import { createElement } from 'react';
import { MessageContentProps } from './type';

const MessageContent = ({ as = 'div', className, children, ...props }: MessageContentProps) => {
  const classNames = ['content'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

MessageContent.displayName = 'MessageContent';

export default MessageContent;

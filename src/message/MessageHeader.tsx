import { createElement } from 'react';
import { MessageHeaderProps } from './type';

const MessageHeader = ({ as = 'div', className, children, ...props }: MessageHeaderProps) => {
  const classNames = ['header'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

MessageHeader.displayName = 'MessageHeader';

export default MessageHeader;

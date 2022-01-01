import React, { createElement, useState } from 'react';
import { Icon } from '../icon';
import MessageContent from './MessageContent';
import MessageHeader from './MessageHeader';
import MessageItem from './MessageItem';
import MessageList from './MessageList';
import { MessageProps } from './type';

const Message = ({
  as = 'div',
  className,
  icon,
  header,
  content,
  closable,
  hidden,
  children,
  visible,
  compact,
  floating,
  textAligned,
  type,
  color,
  size,
  ...props
}: MessageProps) => {
  const [show, setShow] = useState(true);

  const classNames = ['ui', 'message'];

  if (header || content) {
    children = (
      <MessageContent>
        {header && <MessageHeader>{header}</MessageHeader>}
        {content}
        {children}
      </MessageContent>
    );
  }

  if (icon) {
    classNames.push('icon');
    if (typeof icon === 'string') {
      children = (
        <>
          <Icon name={icon} />
          {children}
        </>
      );
    } else if (typeof icon === 'object') {
      children = (
        <>
          {icon}
          {children}
        </>
      );
    }
  }

  if (closable) {
    const handleClose = () => {
      setShow(false);
    };
    children = (
      <>
        <Icon name="close" onClick={handleClose} />
        {children}
      </>
    );
  }

  if (hidden) {
    classNames.push('hidden');
  }

  if (visible) {
    classNames.push('visible');
  }

  if (compact) {
    classNames.push('compact');
  }

  if (floating) {
    classNames.push('floating');
  }

  if (textAligned) {
    classNames.push('aligned');
    classNames.push(textAligned);
  }

  if (type) {
    classNames.push(type);
  }

  if (color) {
    classNames.push(color);
  }

  if (size) {
    classNames.push(size);
  }

  if (className) {
    classNames.push(className);
  }

  if (show) {
    return createElement(as, { className: classNames.join(' '), ...props }, children);
  } else {
    return null;
  }
};

Message.displayName = 'Message';
Message.Header = MessageHeader;
Message.List = MessageList;
Message.Item = MessageItem;
Message.Content = MessageContent;

export default Message;

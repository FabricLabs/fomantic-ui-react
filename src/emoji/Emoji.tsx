import React from 'react';
import { EmojiProps } from './type';

const Emoji = ({ name, className, disabled, link, loading, size, ...props }: EmojiProps) => {
  const classNames = [];

  if (size) {
    classNames.push(size);
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (link) {
    classNames.push('link');
  }

  if (loading) {
    classNames.push('loading');
  }

  if (className) {
    classNames.push(className);
  }
  return <em className={classNames.join(' ')} data-emoji={name} {...props} />;
};

Emoji.displayName = 'Emoji';

export default Emoji;

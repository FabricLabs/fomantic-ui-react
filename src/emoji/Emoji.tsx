import classNames from 'classnames';
import React from 'react';
import { EmojiProps } from './type';

const Emoji = ({ name, className, disabled, link, loading, size, ...props }: EmojiProps) => {
  return (
    <em
      className={classNames({ [size as string]: size, disabled, link, loading }, className)}
      data-emoji={name}
      {...props}
    />
  );
};

Emoji.displayName = 'Emoji';

export default Emoji;

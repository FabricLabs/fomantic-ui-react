import React from 'react';
import { RevealContentProps } from './type';

const RevealContent = ({ as = 'div', className, visible, hidden, content, children, ...props }: RevealContentProps) => {
  const classNames = ['content'];

  if (visible) {
    classNames.push('visible');
  }

  if (hidden) {
    classNames.push('hidden');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

RevealContent.displayName = 'RevealContent';

export default RevealContent;

import { createElement } from 'react';
import { CardContentProps } from './type';

const CardContent = ({ as = 'div', extra, className, children, ...props }: CardContentProps) => {
  const classNames = ['content'];

  if (extra) {
    classNames.push('extra');
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

CardContent.displayName = 'CardContent';

export default CardContent;

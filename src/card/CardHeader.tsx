import { createElement } from 'react';
import { CardHeaderProps } from './type';

const CardHeader = ({ as = 'div', className, content, children, ...props }: CardHeaderProps) => {
  const classNames = ['header'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

CardHeader.displayName = 'CardHeader';

export default CardHeader;

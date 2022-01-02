import { createElement } from 'react';
import { CardMetaProps } from './type';

const CardMeta = ({ as = 'div', floated, className, content, children, ...props }: CardMetaProps) => {
  const classNames = ['meta'];

  if (floated) {
    classNames.push(floated);
    classNames.push('floated');
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

CardMeta.displayName = 'CardMeta';

export default CardMeta;

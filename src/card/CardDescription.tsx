import { createElement } from 'react';
import { CardDescriptionProps } from './type';

const CardDescription = ({ as = 'div', className, content, children, ...props }: CardDescriptionProps) => {
  const classNames = ['description'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

CardDescription.displayName = 'CardDescription';

export default CardDescription;

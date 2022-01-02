import { createElement } from 'react';
import CardContent from './CardContent';
import CardDescription from './CardDescription';
import CardHeader from './CardHeader';
import CardMeta from './CardMeta';
import { CardProps } from './type';

const Card = ({ as = 'div', className, children, ...props }: CardProps) => {
  const classNames = ['ui', 'card'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

Card.displayName = 'Card';
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Meta = CardMeta;
Card.Description = CardDescription;

export default Card;

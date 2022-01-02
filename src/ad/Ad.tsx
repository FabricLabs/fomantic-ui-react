import { createElement } from 'react';
import { AdProps } from './type';

const Ad = ({ as = 'div', unit, test, centered, className, content, children, ...props }: AdProps) => {
  const classNames = ['ui', unit, 'ad'];

  if (test) {
    classNames.push('test');
  }

  if (centered) {
    classNames.push('centered');
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), 'data-text': test, ...props }, children || content);
};

Ad.displayName = 'Ad';

export default Ad;

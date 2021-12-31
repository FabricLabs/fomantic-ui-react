import { createElement } from 'react';
import { <%= PascalCaseComponent %>Props } from './type';

const <%= PascalCaseComponent %> = ({ as = 'div', className, children, ...props }: <%= PascalCaseComponent %>Props) => {
  const classNames = ['ui', '<%= component %>'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

<%= PascalCaseComponent %>.displayName = '<%= PascalCaseComponent %>';

export default <%= PascalCaseComponent %>;

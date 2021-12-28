import React from 'react';
import { <%= PascalCaseComponent %>Props } from './type';

const <%= PascalCaseComponent %> = ({ as = 'div', className, content, children, ...props }: <%= PascalCaseComponent %>Props) => {
  const classNames = ['ui', '<%= component %>'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

<%= PascalCaseComponent %>.displayName = '<%= PascalCaseComponent %>';

export default <%= PascalCaseComponent %>;

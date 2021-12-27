import React from 'react';
import { <%= PascalCaseComponent %>Props } from './type';

const <%= PascalCaseComponent %> = ({ as = 'div', className, ...props }: <%= PascalCaseComponent %>Props) => {
  const classNames = ['ui', '<%= component %>'];

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props });
};

<%= PascalCaseComponent %>.displayName = '<%= PascalCaseComponent %>';

export default <%= PascalCaseComponent %>;

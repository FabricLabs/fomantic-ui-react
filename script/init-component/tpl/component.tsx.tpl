import classNames from 'classnames';
import { createElement } from 'react';
import { <%= PascalCaseComponent %>Props } from './type';

const <%= PascalCaseComponent %> = ({ as = 'div', className, children, ...props }: <%= PascalCaseComponent %>Props) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', '<%= component %>', className), ...props }, children);
};

<%= PascalCaseComponent %>.displayName = '<%= PascalCaseComponent %>';

export default <%= PascalCaseComponent %>;

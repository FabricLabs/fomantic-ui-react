import classNames from 'classnames';
import { createElement } from 'react';
import { HeaderContentProps } from './type';

const HeaderContent = ({ as = 'div', className, content, children, ...props }: HeaderContentProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('content', className), ...props }, children || content);
};

HeaderContent.displayName = 'HeaderContent';

export default HeaderContent;

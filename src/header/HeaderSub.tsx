import classNames from 'classnames';
import { createElement } from 'react';
import { HeaderSubProps } from './type';

const HeaderSub = ({ as = 'div', className, content, children, ...props }: HeaderSubProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('sub', 'header', className), ...props }, children || content);
};

HeaderSub.displayName = 'HeaderSub';

export default HeaderSub;

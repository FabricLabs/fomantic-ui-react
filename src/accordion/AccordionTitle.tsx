import classNames from 'classnames';
import { createElement } from 'react';
import { AccordionTitleProps } from './type';

const AccordionTitle = ({
  as = 'div',
  active,
  index,
  onClick,
  className,
  content,
  children,
  ...props
}: AccordionTitleProps) => {
  if (!as) {
    as = 'div';
  }

  const handleClick = (e: any) => (typeof onClick === 'function' ? onClick(e, index) : undefined);

  return createElement(
    as,
    { className: classNames('title', { active }, className), onClick: handleClick, ...props },
    children || content,
  );
};

AccordionTitle.displayName = 'AccordionTitle';

export default AccordionTitle;

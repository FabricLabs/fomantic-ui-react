import classNames from 'classnames';
import { createElement } from 'react';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';
import { AccordionProps } from './type';

const Accordion = ({ as = 'div', className, children, ...props }: AccordionProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'accordion', className), ...props }, children);
};

Accordion.displayName = 'Accordion';
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;

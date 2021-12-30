import React from 'react';
import RevealContent from './RevealContent';
import { RevealProps } from './type';

const Reveal = ({
  as = 'div',
  className,
  animated,
  small,
  image,
  circular,
  active,
  instant,
  disabled,
  content,
  children,
  ...props
}: RevealProps) => {
  const classNames = ['ui', animated, 'reveal'];

  if (small) {
    classNames.push('small');
  }

  if (image) {
    classNames.push('image');
  }

  if (circular) {
    classNames.push('circular');
  }

  if (active) {
    classNames.push('active');
  }

  if (instant) {
    classNames.push('instant');
  }

  if (disabled) {
    classNames.push('disabled');
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

Reveal.displayName = 'Reveal';
Reveal.Content = RevealContent;

export default Reveal;

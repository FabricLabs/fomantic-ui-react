import React, { forwardRef } from 'react';
import { FButtonContentProps } from './type';

export interface ButtonContentProps extends FButtonContentProps {}

const ButtonContent = forwardRef(
  (
    { as = 'div', className, hidden, visible, content, children, ...buttonContentProps }: ButtonContentProps,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    const classNames = ['content'];

    if (hidden) {
      classNames.push('hidden');
    }

    if (visible) {
      classNames.push('visible');
    }

    if (className) {
      classNames.push(className);
    }

    return React.createElement(
      as,
      { ref, className: classNames.join(' '), ...buttonContentProps },
      content ?? children,
    );
  },
);

ButtonContent.displayName = 'ButtonContent';

export default ButtonContent;

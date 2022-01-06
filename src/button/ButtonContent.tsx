import { createElement } from 'react';
import classnames from 'classnames';
import { ButtonContentProps } from './type';

const ButtonContent = ({ as = 'div', className, hidden, visible, content, children, ...props }: ButtonContentProps) => {
  className = classnames('content', { hidden, visible, className });

  return createElement(as, { className, ...props }, children || content);
};

ButtonContent.displayName = 'ButtonContent';

export default ButtonContent;

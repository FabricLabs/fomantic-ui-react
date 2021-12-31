import { createElement } from 'react';
import { FormFieldProps } from './type';

const FormField = ({ as = 'div', className, children, ...props }: FormFieldProps) => {
  const classNames = ['field'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

FormField.displayName = 'FormField';

export default FormField;

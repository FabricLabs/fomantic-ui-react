import { createElement } from 'react';
import FormField from './FormField';
import { FormProps } from './type';

const Form = ({ as = 'form', className, children, ...props }: FormProps) => {
  const classNames = ['ui', 'form'];

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children);
};

Form.displayName = 'Form';
Form.Field = FormField;

export default Form;

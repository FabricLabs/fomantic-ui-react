import React, { forwardRef } from 'react';
import { FInputProps } from './type';
import { Icon } from '../icon';

export interface InputProps extends FInputProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  (
    {
      as = 'div',
      className,
      focus,
      style,
      icon,
      iconPosition,
      loading,
      loadingDouble,
      loadingColor,
      loadingFast,
      loadingElastic,
      disabled,
      error,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    // const composingRef = useRef(false);
    // const [renderIcon, setRenderIcon] = useState(false);

    let renderIcon = false;

    const classNames = ['ui', 'input'];

    if (focus) {
      classNames.push('focus');
    }

    if (iconPosition) {
      classNames.push(iconPosition);
    }

    if (icon) {
      classNames.push('icon');
      renderIcon = true;
    }

    if (loading) {
      classNames.push('icon');
      classNames.push('loading');
      renderIcon = true;
      icon = 'search';
    }

    if (loadingDouble) {
      classNames.push('double');
    }

    if (loadingColor) {
      classNames.push(loadingColor);
    }

    if (loadingFast) {
      classNames.push('fast');
    }

    if (loadingElastic) {
      classNames.push('elastic');
    }

    if (disabled) {
      classNames.push('disabled');
    }

    if (error) {
      classNames.push('error');
    }

    if (className) {
      classNames.push(className);
    }

    return React.createElement(
      as,
      { ref, className: classNames.join(' '), style },
      <>
        <input type="text" disabled={disabled} {...props} />
        {renderIcon && <Icon name={icon} />}
      </>,
    );
  },
);

Input.displayName = 'Input';

export default Input;

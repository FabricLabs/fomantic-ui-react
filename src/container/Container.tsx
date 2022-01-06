import classNames from 'classnames';
import { createElement } from 'react';
import { ContainerProps } from './type';

const Container = ({
  as = 'div',
  className,
  content,
  fluid,
  text,
  textAlign,
  children,
  ...containerProps
}: ContainerProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames(
        'ui',
        'container',
        { fluid, text, [textAlign as string]: textAlign, aligned: textAlign },
        className,
      ),
      ...containerProps,
    },
    children || content,
  );
};

Container.displayName = 'Container';

export default Container;

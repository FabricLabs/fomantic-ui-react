import { createElement } from 'react';
import { HeaderProps } from './type';
import HeaderContent from './HeaderContent';
import HeaderSub from './HeaderSub';
import classNames from 'classnames';

const Header = ({
  as = 'div',
  className,
  content,
  sub,
  icon,
  disabled,
  dividing,
  block,
  inverted,
  floated,
  attached,
  textAlign,
  size,
  color,
  children,
  ...props
}: HeaderProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames(
        'ui',
        'header',
        {
          sub,
          icon,
          disabled,
          dividing,
          block,
          inverted,
          [floated as string]: floated,
          attached,
          [attached as string]: typeof attached === 'string',
          [textAlign as string]: textAlign,
          aligned: textAlign,
          [size as string]: size,
          [color as string]: color,
        },
        className,
      ),
      ...props,
    },
    children || content,
  );
};

Header.displayName = 'Header';
Header.Content = HeaderContent;
Header.Sub = HeaderSub;

export default Header;

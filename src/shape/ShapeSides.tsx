import { createElement } from 'react';
import classNames from 'classnames';
import { ShapeSidesProps } from './type';

const ShapeSides = ({ as = 'div', className, children, ...props }: ShapeSidesProps) => {
  return createElement(as, { className: classNames('sides', className), ...props }, children);
};

ShapeSides.displayName = 'ShapeSides';

export default ShapeSides;

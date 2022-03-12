import { createElement } from 'react';
import classNames from 'classnames';
import { ShapeSideProps } from './type';

const ShapeSide = ({ as = 'div', className, children, ...props }: ShapeSideProps) => {
  return createElement(as, { className: classNames('side', className), ...props }, children);
};

ShapeSide.displayName = 'ShapeSide';

export default ShapeSide;

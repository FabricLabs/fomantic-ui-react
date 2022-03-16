import { createElement } from 'react';
import classNames from 'classnames';
import { ShapeSideProps } from './type';

const ShapeSide = ({ as = 'div', className, active, hidden, children, ...props }: ShapeSideProps) => {
  return createElement(as, { className: classNames('side', { active, hidden }, className), ...props }, children);
};

ShapeSide.displayName = 'ShapeSide';

export default ShapeSide;

import classNames from 'classnames';
import { createElement } from 'react';
import { StatisticValueProps } from './type';

const StatisticValue = ({ as = 'div', className, content, children, ...props }: StatisticValueProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('value', className), ...props }, children || content);
};

StatisticValue.displayName = 'StatisticValue';

export default StatisticValue;

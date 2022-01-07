import classNames from 'classnames';
import { createElement } from 'react';
import { StatisticGroupProps } from './type';

const StatisticGroup = ({ as = 'div', className, children, ...props }: StatisticGroupProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('ui', 'statistics', className), ...props }, children);
};

StatisticGroup.displayName = 'StatisticGroup';

export default StatisticGroup;

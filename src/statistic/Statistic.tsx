import classNames from 'classnames';
import { createElement } from 'react';
import StatisticGroup from './StatisticGroup';
import StatisticLabel from './StatisticLabel';
import StatisticValue from './StatisticValue';
import { StatisticProps } from './type';

const Statistic = ({ as = 'div', ui = true, className, children, ...props }: StatisticProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames({ ui }, 'statistic', className), ...props }, children);
};

Statistic.displayName = 'Statistic';
Statistic.Value = StatisticValue;
Statistic.Label = StatisticLabel;
Statistic.Group = StatisticGroup;

export default Statistic;

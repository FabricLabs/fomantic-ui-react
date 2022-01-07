import classNames from 'classnames';
import { createElement } from 'react';
import { StatisticLabelProps } from './type';

const StatisticLabel = ({ as = 'div', className, content, children, ...props }: StatisticLabelProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('label', className), ...props }, children || content);
};

StatisticLabel.displayName = 'StatisticLabel';

export default StatisticLabel;

import { createElement } from 'react';
import classNames from 'classnames';
import { TabPaneProps } from './type';

const TabPane = ({ as = 'div', className, tab, active, children, ...props }: TabPaneProps) => {
  if (!as) {
    as = 'div';
  }
  return createElement(as, { className: classNames('ui', 'tab', { active }, className), ...props }, children);
};

TabPane.displayName = 'TabPane';

export default TabPane;

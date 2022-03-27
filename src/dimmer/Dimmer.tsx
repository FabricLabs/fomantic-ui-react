import React from 'react';
import classNames from 'classnames';
import Transition from '../transition';
import DimmerDimmable from './DimmerDimmable';
import { DimmerProps } from './type';
import { useCss } from 'react-use';

const Dimmer = ({ as = 'div', className, active, inverted, content, children, ...props }: DimmerProps) => {
  const cssName = useCss({
    '&.dimmer.transition:not(.hidden)': {
      display: 'flex !important', //TODO: important 无效
    },
  });
  return (
    <Transition
      as={as}
      className={classNames('ui', 'dimmer', { active, inverted }, cssName, className)}
      visible={active}
      {...props}
    >
      {children || content}
    </Transition>
  );
};

Dimmer.displayName = 'Dimmer';
Dimmer.Dimmable = DimmerDimmable;

export default Dimmer;

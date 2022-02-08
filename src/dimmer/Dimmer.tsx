import React from 'react';
import classNames from 'classnames';
import Transition from '../transition';
import DimmerDimmable from './DimmerDimmable';
import { DimmerProps } from './type';

const Dimmer = ({ as = 'div', className, active, inverted, content, children, ...props }: DimmerProps) => {
  return (
    <Transition
      as={as}
      className={classNames('ui', 'dimmer', { active, inverted }, className)}
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

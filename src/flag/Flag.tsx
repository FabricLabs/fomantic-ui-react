import classNames from 'classnames';
import React from 'react';
import { FlagProps } from './type';

const Flag = ({ className, name, ...props }: FlagProps) => {
  return <i className={classNames('flag', name, className)} {...props} />;
};

Flag.displayName = 'Flag';

export default Flag;

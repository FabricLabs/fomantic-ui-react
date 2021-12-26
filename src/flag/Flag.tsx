import React from 'react';
import { FlagProps } from './type';

const Flag = ({ className, name, ...props }: FlagProps) => {
  const classNames = ['flag', name];

  if (className) {
    classNames.push(className);
  }

  return <i className={classNames.join(' ')} {...props} />;
};

Flag.displayName = 'Flag';

export default Flag;

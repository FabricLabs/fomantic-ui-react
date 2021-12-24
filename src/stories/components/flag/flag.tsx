import React from 'react';
import '../less/definitions/elements/flag.less';

export type FlagProps = {
  /**
   * class 属性
   */
  className?: string;
  /**
   * 名称
   */
  name: string;
};

export const Flag = ({ className, name, ...props }: FlagProps) => {
  const classNames = ['flag', name];

  if (className) {
    classNames.push(className);
  }

  return <i className={classNames.join(' ')} {...props} />;
};

import _ from 'lodash';

/**
 * class 属性去重
 */
export const uniq = (classNames: string) => {
  return _.join(_.uniq(_.split(classNames, ' ')), ' ');
};

export default uniq;

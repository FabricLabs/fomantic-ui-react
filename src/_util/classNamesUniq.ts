import _ from 'lodash';

export const uniq = (classNames: string) => {
  return _.join(_.uniq(_.split(classNames, ' ')), ' ');
};

export default uniq;

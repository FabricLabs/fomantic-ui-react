import classNames from 'classnames';
import { createElement } from 'react';
import { SearchCategoryProps } from './type';

const SearchCategory = ({ as = 'div', className, name, children, ...props }: SearchCategoryProps) => {
  return createElement(as, { className: classNames(className), ...props }, children);
};

SearchCategory.displayName = 'SearchCategory';

export default SearchCategory;

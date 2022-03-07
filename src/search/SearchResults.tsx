import classNames from 'classnames';
import { createElement } from 'react';
import { isNil } from '../_util/reactNode';
import { SearchResultsProps } from './type';

const SearchResults = ({ as = 'div', className, content, children, ...props }: SearchResultsProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    { className: classNames('results', className), ...props },
    isNil(children) ? content : children,
  );
};

SearchResults.displayName = 'SearchResults';

export default SearchResults;

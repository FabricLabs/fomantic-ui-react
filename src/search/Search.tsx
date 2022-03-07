import React, { ChangeEvent, createElement, CSSProperties, SyntheticEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { SearchProps, SearchResultProps } from './type';
import SearchResults from './SearchResults';
import SearchResult from './SearchResult';
import SearchCategory from './SearchCategory';
import Transition from '../transition';

const Search = ({
  as = 'div',
  className,
  loading,
  icon,
  placeholder,
  value,
  selectFirstResult,
  results,
  noResultsMessage = 'No results',
  noResultsDescription,
  showNoResults = true,
  minCharacters = 1,
  onSearchChange,
  onResultSelect,
  ...props
}: SearchProps) => {
  const [focus, setFocus] = useState(false);
  const [currentValue, setCurrentValue] = useState<string>(value ?? '');
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(selectFirstResult ? 0 : -1);

  if (!as) {
    as = 'div';
  }

  let classNamesVar = {};

  if (loading) {
    if (typeof loading === 'boolean') {
      classNamesVar = { focus, loading };
    } else if (loading.color) {
      classNamesVar = {
        focus,
        double: loading.double,
        slow: loading.slow,
        elastic: loading.elastic,
        [loading.color]: loading.color,
        loading: true,
      };
    } else {
      classNamesVar = { focus, double: loading.double, slow: loading.slow, elastic: loading.elastic, loading: true };
    }
  } else {
    classNamesVar = { focus };
  }

  const handleInputFocus = () => {
    setFocus(true);
  };

  const handleInputBlur = () => {
    setFocus(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.target.value.length >= minCharacters) {
      setTransition(true);
      onSearchChange?.(e);

      setCurrentValue(e.target.value);
      setTimeout(() => {
        setOpen(e.target.value ? true : false);
      });
    } else {
      setCurrentValue(e.target.value);
      setOpen(false);
    }
  };

  const getSelectedResult = (index: number | string = selectedIndex) => {
    return _.get(results, index);
  };

  // 点击结果项时触发
  const handleItemClick = (e: SyntheticEvent, { id }: SearchResultProps) => {
    console.log(id);

    const result: SearchResultProps = getSelectedResult(id);
    // e.persist();
    // e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setCurrentValue(result.title);
    onResultSelect?.(e, result);
    setOpen(false);
  };

  const inputElement = createElement('input', {
    className: 'prompt',
    type: 'text',
    placeholder,
    autoComplete: 'off',
    value: currentValue,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onChange: handleSearchChange,
  });

  const renderNoResults = () => {
    return (
      <div className="message empty">
        <div className="header">{noResultsMessage}</div>
        {noResultsDescription && <div className="description">{noResultsDescription}</div>}
      </div>
    );
  };

  const renderResult = (
    { childkey, ...result }: SearchResultProps,
    index: number,
    _array: SearchResultProps[],
    offset = 0,
  ) => {
    const offsetIndex = index + offset;

    return (
      <SearchResult
        key={childkey ?? (result.id || result.title)}
        {...result}
        id={offsetIndex}
        onClick={handleItemClick}
      />
    );
  };

  const renderResults = () => {
    return _.map(results, renderResult);
  };

  const renderMenuContent = () => {
    if (_.isEmpty(results)) {
      return showNoResults ? renderNoResults() : null;
    }

    return renderResults();
  };

  const renderResultsMenu = () => {
    const menuContent = renderMenuContent();

    if (!menuContent) {
      return null;
    }

    return transition ? (
      <Transition as={SearchResults} visible={open} animation="scale" duration={300}>
        {menuContent}
      </Transition>
    ) : (
      <SearchResults>{menuContent}</SearchResults>
    );
  };

  return createElement(
    as,
    { className: classNames('ui', 'search', classNamesVar, className), ...props },
    <>
      {icon ? (
        <div className={classNames('ui', { left: icon === 'left' }, 'icon', 'input')}>
          {inputElement}
          <i className="search icon"></i>
        </div>
      ) : (
        inputElement
      )}
      {renderResultsMenu()}
    </>,
  );
};

Search.displayName = 'Search';

Search.Result = SearchResult;
Search.Results = SearchResults;
Search.Category = SearchCategory;

export default Search;

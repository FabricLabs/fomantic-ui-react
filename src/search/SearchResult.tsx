import classNames from 'classnames';
import React, { createElement, SyntheticEvent } from 'react';
import { SearchResultProps } from './type';

const defaultRenderer = ({ image, price, title, description }: SearchResultProps) => [
  image && (
    <div key="image" className="image">
      <img src={image} />
    </div>
  ),
  <div key="content" className="content">
    {price && <div className="price">{price}</div>}
    {title && <div className="title">{title}</div>}
    {description && <div className="description">{description}</div>}
  </div>,
];

const SearchResult = (props: SearchResultProps) => {
  const { as = 'div', className, active, renderer = defaultRenderer, onClick } = props;

  const handleClick = (e: SyntheticEvent) => {
    onClick?.(e, props);
  };

  return createElement(
    as ? as : 'div',
    { className: classNames('result', { active }, className), onClick: handleClick },
    renderer(props),
  );
};

SearchResult.displayName = 'SearchResult';

export default SearchResult;

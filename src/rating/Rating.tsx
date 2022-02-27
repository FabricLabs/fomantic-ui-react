import classNames from 'classnames';
import _ from 'lodash';
import React, { createElement, useState } from 'react';
import Icon from '../icon';
import { RatingProps } from './type';

const Rating = ({
  as = 'div',
  className,
  icon = 'star',
  max = 1,
  rating = 0,
  color = 'black',
  disabled,
  size,
  children,
  ...props
}: RatingProps) => {
  const [selected, setSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [ratingVal, setRatingVal] = useState(rating);

  if (!as) {
    as = 'div';
  }

  return createElement(
    as,
    {
      className: classNames('ui', size, color, { disabled }, 'rating', { selected }, className),
      onMouseLeave: () => {
        if (!disabled) {
          setSelectedIndex(-1);
          setSelected(false);
        }
      },
      ...props,
    },
    _.times(max, (i) => (
      <Icon
        key={i}
        name={icon}
        className={classNames({ active: ratingVal > i, selected: selected && selectedIndex >= i })}
        onClick={() => {
          if (!disabled) {
            setRatingVal(i + 1);
          }
        }}
        onMouseEnter={() => {
          if (!disabled) {
            setSelectedIndex(i);
            setSelected(true);
          }
        }}
      />
    )),
  );
};

Rating.displayName = 'Rating';

export default Rating;

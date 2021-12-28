import React from 'react';
import { ListProps } from './type';
import ListItem from './ListItem';
import ListContent from './ListContent';
import ListHeader from './ListHeader';
import ListDescription from './ListDescription';
import ListIcon from './ListIcon';
import ListList from './ListList';

const List = ({
  as = 'div',
  className,
  items,
  relaxed,
  divided,
  bulleted,
  horizontal,
  ordered,
  suffixed,
  link,
  content,
  children,
  ...props
}: ListProps) => {
  const classNames = ['ui', 'list'];

  if (relaxed) {
    classNames.push('relaxed');
  }

  if (divided) {
    classNames.push('divided');
  }

  if (bulleted) {
    classNames.push('bulleted');
  }

  if (horizontal) {
    classNames.push('horizontal');
  }

  if (ordered) {
    classNames.push('ordered');
  }

  if (suffixed) {
    classNames.push('suffixed');
  }

  if (link) {
    classNames.push('link');
  }

  if (className) {
    classNames.push(className);
  }

  if (items) {
    return React.createElement(
      as,
      { className: classNames.join(' '), ...props },
      items.map((item, index) => <ListItem key={index}>{item}</ListItem>),
    );
  } else {
    return React.createElement(as, { className: classNames.join(' '), ...props }, children || content);
  }
};

List.displayName = 'List';
List.Item = ListItem;
List.Content = ListContent;
List.Description = ListDescription;
List.Header = ListHeader;
List.Icon = ListIcon;
List.List = ListList;

export default List;

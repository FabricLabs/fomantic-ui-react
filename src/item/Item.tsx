import classNames from 'classnames';
import { createElement } from 'react';
import ItemContent from './ItemContent';
import ItemDescription from './ItemDescription';
import ItemExtra from './ItemExtra';
import ItemGroup from './ItemGroup';
import ItemHeader from './ItemHeader';
import ItemMeta from './ItemMeta';
import { ItemProps } from './type';

const Item = ({ as = 'div', className, children, ...props }: ItemProps) => {
  if (!as) {
    as = 'div';
  }

  return createElement(as, { className: classNames('item', className), ...props }, children);
};

Item.displayName = 'Item';
Item.Group = ItemGroup;
Item.Content = ItemContent;
Item.Header = ItemHeader;
Item.Description = ItemDescription;
Item.Meta = ItemMeta;
Item.Extra = ItemExtra;

export default Item;

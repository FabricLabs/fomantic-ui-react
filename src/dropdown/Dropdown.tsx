import classNames from 'classnames';
import React, {
  createElement,
  useRef,
  useState,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  Children,
  cloneElement,
  ChangeEvent,
} from 'react';
import _ from 'lodash';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownDivider from './DropdownDivider';
import DropdownSearchInput from './DropdownSearchInput';
import type { DropdownItemProps, DropdownProps } from './type';
import Icon from '../icon';
import { FNode } from '../common';
import { isNil, isValidElement } from '../_util/reactNode';
import { DropdownMenuProps } from '.';

// TODO: 上下键选择选项
// TODO: 多选
// TODO: 搜索下拉列表
// TODO: 在菜单中搜索
// TODO: options 中子菜单
// ...

const Dropdown = ({
  as = 'div',
  text,
  fluid,
  className,
  selection,
  name,
  value,
  placeholder,
  on = 'click',
  search,
  clearable,
  noResultsMessage = 'No results found.',
  options = [],
  onClick,
  children,
  ...props
}: DropdownProps) => {
  const [visible, setVisible] = useState(false);
  const [textState, setTextState] = useState<string | FNode>(text);
  const [inputValue, setInputValue] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [searchElement, setSearchElement] = useState<FNode>();
  const [searchValue, setSearchValue] = useState<string>();
  const [filtered, setFiltered] = useState(false);

  const ref = useRef<Element>();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (on === 'click') {
      e.stopPropagation();
      setVisible(!visible);
    }
    onClick?.(e);
  };

  const handleHover = (e: MouseEvent<HTMLElement>) => {
    if (on === 'hover') {
      if (e.type === 'mouseenter') {
        setVisible(true);
      } else if (e.type === 'mouseleave') {
        setVisible(false);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      setVisible(false);
    }

    if (search && e.key === 'Enter') {
      (ref.current?.querySelector('.menu > .item.selected') as HTMLElement).click();
    }
  };

  const handleHideDropdown = () => {
    setVisible(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFiltered(true);
      let endLoop = false;
      ref.current?.querySelectorAll('.menu > .item').forEach((item, index) => {
        setTimeout(() => {
          if (item.classList.contains('filtered') === false && endLoop === false) {
            setSelectedIndex(index);
            endLoop = true;
          }
        });
      });
    } else {
      setFiltered(false);
      setSelectedIndex(0);
    }
    setSearchValue(e.target.value);
  };

  const scrollSelectedItemIntoView = () => {
    if (!ref.current) {
      return;
    }

    const menu = ref.current.querySelector('.menu');
    if (!menu) {
      return;
    }

    const item = menu.querySelector<HTMLElement>('.item.active');

    if (!item) {
      return;
    }

    const isOutOfUpperView = item.offsetTop < menu.scrollTop;
    const isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

    if (isOutOfUpperView) {
      menu.scrollTop = item.offsetTop;
    } else if (isOutOfLowerView) {
      menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
    }
  };

  useEffect(() => {
    if (visible) {
      // document.addEventListener('click', handleHideDropdown, true);
      document.onclick = handleHideDropdown;
      if (search) {
        setSearchElement(<DropdownSearchInput tabIndex={0} onChange={handleSearchChange} />);
        if (value === undefined && selectedIndex === undefined) {
          setSelectedIndex(0);
        }
      }
    } else {
      // document.removeEventListener('click', handleHideDropdown, true);
      document.onclick = null;
      if (search) {
        setSearchElement(null);
        setFiltered(false);
      }
    }
  }, [visible]);

  let menu = <></>;

  if (isNil(children)) {
    let itemChildren: Array<FNode> = [];
    if (selection) {
      let hasResults = false;

      _.forEach(options, (item, i) => {
        const handleItemClick = () => {
          setInputValue(item.value);
          setTextState(item.text);
          setSelectedIndex(i);
          setFiltered(false);
        };
        useEffect(() => {
          if (inputValue === item.value) {
            setSelectedIndex(i);
            setTextState(item.text);
          }
        }, []);

        const findValue = () => {
          if (filtered || searchValue) {
            if (typeof item.value === 'string' || typeof item.value === 'number') {
              if (_.toLower(_.trim(item.value.toString())).includes(_.toLower(searchValue!)) !== false) {
                hasResults = true;
                return false;
              }
            }
            if (_.toLower(_.trim(item.text || item.children?.toString())).includes(_.toLower(searchValue!)) !== false) {
              hasResults = true;
              return false;
            }
            return true;
          } else {
            return false;
          }
        };

        if (item.unfilterable) {
          hasResults = true;
        }

        itemChildren.push(
          <DropdownItem
            className={classNames({
              filtered: item.unfilterable ? false : findValue(),
            })}
            key={i}
            active={inputValue === item.value}
            selected={selectedIndex === i}
            value={item.value}
            text={item.text}
            onClick={handleItemClick}
          />,
        );
      });

      menu = (
        <DropdownMenu open={visible} onShow={scrollSelectedItemIntoView} onHide={() => setSearchValue(undefined)}>
          {itemChildren}
        </DropdownMenu>
      );
    } else {
      _.forEach(options, (item, i) => {
        itemChildren.push(<DropdownItem key={i} {...item} />);
      });
      menu = <DropdownMenu open={visible}>{itemChildren}</DropdownMenu>;
    }
  } else {
    const menuChild = Children.only(children);

    if (isValidElement(menuChild)) {
      if (selection) {
        let hasResults = false;
        let itemChildren = Children.map(menuChild.props.children, (childItem, i) => {
          if (isValidElement(childItem)) {
            const childItemProps = childItem.props as DropdownItemProps;
            useEffect(() => {
              if (inputValue === childItemProps.value) {
                setSelectedIndex(i);
                setTextState(childItemProps.text);
              }
            }, []);
            const findValue = () => {
              if (filtered || searchValue) {
                if (typeof childItemProps.value === 'string' || typeof childItemProps.value === 'number') {
                  if (_.toLower(_.trim(childItemProps.value.toString())).includes(_.toLower(searchValue!)) !== false) {
                    hasResults = true;
                    return false;
                  }
                }
                if (
                  _.toLower(_.trim(childItemProps.text || childItemProps.children?.toString())).includes(
                    _.toLower(searchValue!),
                  ) !== false
                ) {
                  hasResults = true;
                  return false;
                }
                return true;
              } else {
                return false;
              }
            };
            if (childItemProps.unfilterable) {
              hasResults = true;
            }
            return cloneElement(childItem, {
              key: i,
              active: inputValue === childItemProps.value,
              selected: selectedIndex === i,
              className: classNames({
                filtered: childItemProps.unfilterable ? false : findValue(),
              }),
              onClick: () => {
                setInputValue(childItemProps.value);
                setTextState(childItemProps.text || childItemProps.children);
                setSelectedIndex(i);
                setFiltered(false);
              },
            } as DropdownItemProps);
          }
        });

        if (search && searchValue && hasResults === false) {
          itemChildren = (
            <>
              {itemChildren}
              <div className="message">{noResultsMessage}</div>
            </>
          );
        }

        menu = cloneElement(
          menuChild,
          {
            open: visible,
            onShow: scrollSelectedItemIntoView,
            onHide: () => setSearchValue(undefined),
          } as DropdownMenuProps,
          itemChildren,
        );
      } else {
        menu = cloneElement(menuChild, { open: visible });
      }
    }
  }

  if (!as) {
    as = 'div';
  }

  let inputElement = <></>;

  if (typeof inputValue === 'string' || typeof inputValue === 'number') {
    inputElement = <input type="hidden" name={name} value={inputValue} />;
  } else if (typeof inputValue === 'boolean') {
    inputElement = <input type="hidden" name={name} value={inputValue ? 1 : 0} />;
  }

  return createElement(
    as,
    {
      ref,
      className: classNames('ui', 'dropdown', { fluid, selection, active: selection && visible, search }, className),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      onMouseEnter: handleHover,
      onMouseLeave: handleHover,
      tabIndex: '0',
      ...props,
    },
    <>
      {selection ? (
        <>
          {inputElement}
          <Icon name="dropdown" />
          {searchElement}
          {clearable && selectedIndex !== undefined && (
            <Icon
              name="remove"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                setSelectedIndex(undefined);
                setInputValue(undefined);
                setTextState(undefined);
              }}
            />
          )}
          <div className={classNames('text', { default: placeholder && !textState, filtered })}>
            {textState || placeholder}
          </div>
        </>
      ) : (
        <>
          <div className="text">{textState}</div>
          <Icon name="dropdown" />
        </>
      )}
      {menu}
    </>,
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;
Dropdown.SearchInput = DropdownSearchInput;

export default Dropdown;

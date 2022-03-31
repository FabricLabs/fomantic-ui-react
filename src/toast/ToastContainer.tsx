import React, {
  createContext,
  createElement,
  createRef,
  forwardRef,
  RefObject,
  useImperativeHandle,
  useState,
} from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import _ from 'lodash';
import { ToastProps, ToastContainerProps, ToastInstance, ToastPositionList } from './type';
import Toast from './Toast';

interface ToastContainerInstance extends ToastProps {
  push: (options: ToastProps) => Promise<ToastInstance | null>;
  remove: (key: string) => void;
  removeAll: () => void;
}

interface ToastContainerOpenOption extends ToastProps {
  id: string;
  key: string;
  ref: RefObject<ToastInstance>;
}
let seed = 0;

export const listMap: Map<ToastPositionList, ToastContainerInstance | null> = new Map();

export const ToastRemoveContext = createContext<(key: string) => void>(() => {});

const ToastContainer = forwardRef<ToastContainerInstance, ToastContainerProps>(
  ({ as = 'div', className, position = 'top right', context = 'body', zIndex, newestOnTop, ...props }, ref) => {
    const [list, setList] = useState<Array<ToastContainerOpenOption>>([]);

    if (!as) {
      as = 'div';
    }

    const push = (options: ToastProps): Promise<ToastInstance | null> => {
      const key = String((seed += 1));
      const ref = createRef<ToastInstance>();
      setList((oldList) =>
        newestOnTop ? [{ ...options, id: key, key, ref }, ...oldList] : [...oldList, { ...options, id: key, key, ref }],
      );

      return Promise.resolve(ref.current);
    };

    const remove = (key: string) => {
      setList((oldList) => {
        const index = oldList.findIndex((item) => item.key === key);
        if (index !== -1) {
          const tempList = [...oldList];
          tempList.splice(index, 1);
          return [...tempList];
        }
        return oldList;
      });
    };

    const removeAll = () => {
      setList([]);
    };

    useImperativeHandle(ref, () => ({ push, remove, removeAll }));

    return (
      <ToastRemoveContext.Provider value={remove}>
        {createElement(
          as,
          {
            className: classNames('ui', 'toast-container', position, className),
            style: { zIndex },
            ...props,
          },
          list.map((tProps) => {
            const { ref, key, onCloseClick, ...sProps } = tProps;
            return (
              <Toast
                ref={ref}
                key={key}
                onCloseClick={(e) => {
                  remove(key);
                  onCloseClick?.(e);
                }}
                {...sProps}
              />
            );
          }),
        )}
      </ToastRemoveContext.Provider>
    );
  },
);

export const fetchListInstance = (
  containerOptions: ToastContainerProps,
): Promise<ToastContainerInstance | undefined> => {
  return new Promise((resolve) => {
    const attach: HTMLElement = (() => {
      let parentElement: HTMLElement = document.body;
      const context = containerOptions.context || 'body';
      if (typeof context === 'string') {
        const element: Element | null = document.querySelector(context);
        if (element instanceof HTMLElement) parentElement = element;
      }

      if (context instanceof HTMLElement) parentElement = context;

      const containerClassName = `fomantic-toast-${_.kebabCase(containerOptions.position || 'top right')}`;

      const container = parentElement.querySelector(`.${containerClassName}`);
      if (container && container instanceof HTMLElement) {
        return container;
      }

      const element: HTMLDivElement = document.createElement('div');
      element.setAttribute('class', containerClassName);
      parentElement.appendChild(element);
      return element;
    })();

    let hasExec = false;

    render(
      <ToastContainer
        {...containerOptions}
        ref={(instance) => {
          if (!hasExec) {
            hasExec = true;
            listMap.set(containerOptions.position || 'top right', instance);
            resolve(instance || undefined);
          }
        }}
      />,
      attach,
    );
  });
};

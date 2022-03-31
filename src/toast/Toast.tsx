import classNames from 'classnames';
import React, { forwardRef, SyntheticEvent, useContext, useEffect, useImperativeHandle, useState } from 'react';
import { ToastRemoveContext } from './ToastContainer';
import { ToastProps, ToastInstance } from './type';
import Header from '../header';
import Icon from '../icon';
import Transition from '../transition';
import Div from '../div';
import uniq from '../_util/classNamesUniq';

const Toast = forwardRef<ToastInstance, ToastProps>(
  (
    {
      className,
      theme = 'neutral',
      compact = true,
      title,
      message,
      closeIcon,
      displayTime = 3000,
      id,
      onCloseClick,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    const [box, setBox] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setBox(true);
        setVisible(true);
      });
    }, []);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (visible) {
        if (displayTime > 0) {
          timer = setTimeout(() => {
            clearTimeout(timer);
            setVisible(false);
            setTimeout(() => {
              setBox(false);
              id && remove(id);
            }, 550);
          }, displayTime);
        }
      }
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [visible]);

    const remove = useContext(ToastRemoveContext);
    useImperativeHandle(ref, () => ({ close: () => id && remove(id) }));

    return (
      <Div
        as={Transition}
        className={uniq(classNames('floating', { 'toast-box': box, compact, unclickable: closeIcon }, className))}
        animation="scale"
        duration={500}
        visible={visible}
        onClick={(e: SyntheticEvent) => {
          if (!closeIcon) {
            setVisible(false);
            setTimeout(() => {
              onCloseClick?.({ e });
            }, 500);
          }
        }}
        {...props}
      >
        <div className={classNames('ui', 'toast', theme, { compact }, 'visible')}>
          <div className="content">
            {title && <Header>{title}</Header>}
            <div className="message">{message}</div>
          </div>
          {closeIcon && (
            <Icon
              name="close"
              onClick={(e) => {
                setVisible(false);
                setTimeout(() => {
                  onCloseClick?.({ e });
                }, 500);
              }}
            />
          )}
          <span className="wait progressing pausable"></span>
        </div>
      </Div>
    );
  },
);

Toast.displayName = 'Toast';

export default Toast;

import classNames from 'classnames';
import React, { createElement, isValidElement, MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { PopupProps } from './type';
import Transition from '../transition';

const Popup = ({
  as = 'div',
  trigger,
  on = 'hover',
  duration = 200,
  animation = 'scale',
  delay = { show: 50, hide: 70 },
  position = 'top',
  className,
  style,
  content,
  children,
  ...props
}: PopupProps) => {
  if (!as) {
    as = 'div';
  }

  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const [triggerRef, setTriggerRef] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(triggerRef, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 10] } },
    ],
    placement: position,
  });

  let triggerElement;

  if (isValidElement(trigger)) {
    let triggerProps: { [key: string]: any } = {};

    if (on === 'click') {
      triggerProps.onClick = (e: MouseEvent<HTMLElement>) => {
        if (toggle) {
          setTimeout(
            () => {
              setVisible(false);
            },
            typeof delay === 'number' ? delay : delay.hide,
          );
        } else {
          setToggle(true);
          setTimeout(
            () => {
              setVisible(true);
            },
            typeof delay === 'number' ? delay : delay.show,
          );
        }
        trigger.props.onClick && trigger.props.onClick(e);
      };
    }

    if (on === 'hover') {
      triggerProps.onMouseEnter = (e: MouseEvent<HTMLElement>) => {
        setToggle(true);
        setTimeout(
          () => {
            setVisible(true);
          },
          typeof delay === 'number' ? delay : delay.show,
        );
        trigger.props.onMouseEnter && trigger.props.onMouseEnter(e);
      };
      triggerProps.onMouseLeave = (e: MouseEvent<HTMLElement>) => {
        setTimeout(
          () => {
            setVisible(false);
          },
          typeof delay === 'number' ? delay : delay.hide,
        );
        trigger.props.onMouseLeave && trigger.props.onMouseLeave(e);
      };
    }

    if (on === 'focus') {
      triggerProps.onFocus = (e: MouseEvent<HTMLElement>) => {
        setToggle(true);
        setTimeout(
          () => {
            setVisible(true);
          },
          typeof delay === 'number' ? delay : delay.show,
        );
        trigger.props.onFocus && trigger.props.onFocus(e);
      };
      triggerProps.onBlur = (e: MouseEvent<HTMLElement>) => {
        setTimeout(
          () => {
            setVisible(false);
          },
          typeof delay === 'number' ? delay : delay.hide,
        );
        trigger.props.onBlur && trigger.props.onBlur(e);
      };
    }

    triggerElement = createElement(trigger.type, { ref: setTriggerRef, ...trigger.props, ...triggerProps });
  }

  return (
    <>
      {triggerElement}
      {toggle &&
        createPortal(
          createElement(
            as,
            { ref: setPopperElement, style: { ...styles.popper, ...style }, ...props },
            <Transition
              className={classNames('ui', 'popper', className)}
              animation={animation}
              duration={duration}
              visible={visible}
              onHide={() => setToggle(false)}
              style={{ display: 'block' }}
              {...attributes.popper}
            >
              {children || content}
              <div className="arrow" ref={setArrowElement} style={styles.arrow} />
            </Transition>,
          ),
          document.body,
        )}
    </>
  );
};

Popup.displayName = 'Popup';

export default Popup;

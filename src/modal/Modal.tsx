import React, { ReactPortal, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { useClickAway, useCss } from 'react-use';
import { ModalProps } from './type';
import Button from '../button';
import Dimmer from '../dimmer';

const Modal = ({ as = 'div', className, active, onClose, children, ...props }: ModalProps): ReactPortal => {
  const [isActive, setIsActive] = useState(active);

  const ref = useRef(null);

  const overflow = useCss({ overflow: 'hidden' });

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add(overflow);
    } else {
      document.body.classList.remove(overflow);
    }
  }, [isActive]);

  useClickAway(ref, () => {
    setIsActive(false);
    onClose?.();
  });

  if (!as) {
    as = 'div';
  }

  return createPortal(
    <Dimmer as={as} className={classNames('modals', 'page')} active={isActive} {...props}>
      <div ref={ref} className={classNames('ui', 'modal', 'active')}>
        <div className="header">Select a Photo</div>
        <div className="image content">
          <div className="ui medium image">
            <img src="/images/avatar/large/rachel.png" />
          </div>
          <div className="description">
            <div className="ui header">Default Profile Image</div>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </div>
        </div>
        <div className="actions">
          <Button content="Nope" />
          <Button icon="checkmark" content="Yep, that's me" />
        </div>
      </div>
    </Dimmer>,
    document.body,
  );
};

Modal.displayName = 'Modal';

export default Modal;

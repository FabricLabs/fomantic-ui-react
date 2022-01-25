import classNames from 'classnames';
import React, { createElement, useState } from 'react';
import { EmbedProps } from './type';
import Icon from '../icon';
const Embed = ({
  as = 'div',
  className,
  aspectRatio = '16:9',
  placeholder,
  active,
  source,
  id,
  ...props
}: EmbedProps) => {
  const [isActive, setIsActive] = useState(active);
  const [iframeSrc, setIframeSrc] = useState<string>();

  if (!as) {
    as = 'div';
  }

  const content = (
    <>
      <Icon name="video play" />
      {placeholder && <img className="placeholder" src={placeholder} alt="placeholder" />}
      {isActive && (
        <div className="embed">
          <iframe
            allowFullScreen={true}
            src={iframeSrc}
            width="100%"
            height="100%"
            title="Embedded content from youku"
          ></iframe>
        </div>
      )}
    </>
  );

  return createElement(
    as,
    {
      className: classNames('ui', { [aspectRatio]: aspectRatio }, 'embed', { active: isActive }, className),
      onClick: () => {
        setIsActive(true);
        if (source === 'youku') {
          setIframeSrc(`//player.youku.com/embed/${id}`);
        }
      },
      ...props,
    },
    content,
  );
};

Embed.displayName = 'Embed';

export default Embed;

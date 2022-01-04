import { createElement } from 'react';
import { ImageGroupProps } from './type';

const ImageGroup = ({ as = 'div', size, className, content, children, ...props }: ImageGroupProps) => {
  const classNames = ['ui', 'images'];

  if (size) {
    classNames.push(size);
  }

  if (className) {
    classNames.push(className);
  }

  return createElement(as, { className: classNames.join(' '), ...props }, children || content);
};

ImageGroup.displayName = 'ImageGroup';

export default ImageGroup;

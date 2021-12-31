import { ElementType } from 'react';
import { CollectionProps } from '../common';

export interface FormProps extends CollectionProps {
  /**
   * 标签名称
   * @default form
   */
  as?: ElementType;
}

export interface FormFieldProps extends CollectionProps {}

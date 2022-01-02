import { ElementProps, ViewProps } from '../common';

export interface CardProps extends ViewProps {}

export interface CardContentProps extends ElementProps {
  /**
   * 附加
   */
  extra?: boolean;
}

export interface CardHeaderProps extends ElementProps {}

export interface CardMetaProps extends ElementProps {
  /**
   * 浮动
   */
  floated?: 'left' | 'right';
}

export interface CardDescriptionProps extends ElementProps {}

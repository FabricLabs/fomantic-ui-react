import { ElementType } from 'react';
import { ElementProps, ViewProps } from '../common';

export interface FeedProps extends ViewProps {}

export interface FeedEventProps extends ViewProps {}

export interface FeedLabelProps extends ViewProps {}

export interface FeedContentProps extends ViewProps {}

export interface FeedSummaryProps extends ViewProps {}

export interface FeedUserProps extends ElementProps {
  /**
   * 标签或组件名称
   * @default a
   */
  as?: ElementType;
}

export interface FeedDateProps extends ElementProps {}

export interface FeedMetaProps extends ViewProps {}

export interface FeedLikeProps extends ViewProps {}

export interface FeedExtraProps extends ViewProps {}

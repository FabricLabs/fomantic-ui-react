import * as React from 'react'

import { IconProps } from '../../elements/Icon'
import { HtmlImageProps, SemanticShorthandContent, SemanticShorthandItem } from '../../generic'

export interface FeedLabelProps extends StrictFeedLabelProps {
  [key: string]: any
}

export interface StrictFeedLabelProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** An event can contain icon label. */
  icon?: SemanticShorthandItem<IconProps>

  /** An event can contain image label. */
  image?: SemanticShorthandItem<HtmlImageProps>
}

declare const FeedLabel: React.FC<FeedLabelProps>

export default FeedLabel

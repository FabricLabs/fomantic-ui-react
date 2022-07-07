import * as React from 'react'

import { IconProps } from '../../elements/Icon'
import { SemanticShorthandContent, SemanticShorthandItem } from '../../generic'

export interface FeedLikeProps extends StrictFeedLikeProps {
  [key: string]: any
}

export interface StrictFeedLikeProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: SemanticShorthandItem<IconProps>
}

declare const FeedLike: React.FC<FeedLikeProps>

export default FeedLike

import * as React from 'react'

import { IconProps } from '../../elements/Icon'
import { SemanticShorthandContent, SemanticShorthandItem } from '../../generic'

export interface BreadcrumbDividerProps extends StrictBreadcrumbDividerProps {
  [key: string]: any
}

export interface StrictBreadcrumbDividerProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon?: SemanticShorthandItem<IconProps>
}

declare const BreadcrumbDivider: React.FC<BreadcrumbDividerProps>

export default BreadcrumbDivider

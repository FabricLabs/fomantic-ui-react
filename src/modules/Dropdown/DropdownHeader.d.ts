import * as React from 'react'

import { IconProps } from '../../elements/Icon'
import { SemanticShorthandContent, SemanticShorthandItem } from '../../generic'

export interface DropdownHeaderProps extends StrictDropdownHeaderProps {
  [key: string]: any
}

export interface StrictDropdownHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Shorthand for Icon. */
  icon?: SemanticShorthandItem<IconProps>
}

declare const DropdownHeader: React.ComponentClass<DropdownHeaderProps>

export default DropdownHeader

import React from 'react'

import TableHeader from 'src/collections/Table/TableHeader'
import * as common from 'test/specs/commonTests'

describe('TableHeader', () => {
  common.isConformant(TableHeader)
  common.rendersChildren(TableHeader)

  common.propKeyOnlyToClassName(TableHeader, 'fullWidth', {
    className: 'full-width',
  })

  it('renders as a thead by default', () => {
    shallow(<TableHeader />).should.have.tagName('thead')
  })
})

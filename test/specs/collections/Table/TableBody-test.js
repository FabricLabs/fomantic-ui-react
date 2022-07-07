import React from 'react'

import TableBody from 'src/collections/Table/TableBody'
import * as common from 'test/specs/commonTests'

describe('TableBody', () => {
  common.isConformant(TableBody)
  common.rendersChildren(TableBody, {
    rendersContent: false,
  })

  it('renders as a tbody by default', () => {
    shallow(<TableBody />).should.have.tagName('tbody')
  })
})

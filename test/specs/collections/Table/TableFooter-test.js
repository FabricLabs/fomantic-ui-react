import React from 'react'

import TableFooter from 'src/collections/Table/TableFooter'
import * as common from 'test/specs/commonTests'

describe('TableFooter', () => {
  common.isConformant(TableFooter)

  it('renders as a tfoot by default', () => {
    shallow(<TableFooter />).should.have.tagName('tfoot')
  })
})

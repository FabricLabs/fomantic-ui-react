import React from 'react'

import TableHeaderCell from 'src/collections/Table/TableHeaderCell'
import * as common from 'test/specs/commonTests'

describe('TableHeaderCell', () => {
  common.isConformant(TableHeaderCell)
  common.propKeyAndValueToClassName(TableHeaderCell, 'sorted', ['ascending', 'descending'])

  it('renders as a th by default', () => {
    shallow(<TableHeaderCell />).should.have.tagName('th')
  })
})

import React from 'react'
import FeedDate from 'src/views/Feed/FeedDate'
import FeedSummary from 'src/views/Feed/FeedSummary'
import FeedUser from 'src/views/Feed/FeedUser'
import * as common from 'test/specs/commonTests'

describe('FeedSummary', () => {
  common.isConformant(FeedSummary)
  common.rendersChildren(FeedSummary)

  common.implementsShorthandProp(FeedSummary, {
    autoGenerateKey: false,
    propKey: 'date',
    ShorthandComponent: FeedDate,
    mapValueToProps: (val) => ({ content: val }),
  })
  common.implementsShorthandProp(FeedSummary, {
    autoGenerateKey: false,
    propKey: 'user',
    ShorthandComponent: FeedUser,
    mapValueToProps: (val) => ({ content: val }),
  })

  describe('content', () => {
    it('inserts whitespace on both sides of the content', () => {
      shallow(<FeedSummary content='test' />).should.contain.text(' test ')
    })
  })
})

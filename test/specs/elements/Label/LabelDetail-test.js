import LabelDetail from 'src/elements/Label/LabelDetail'
import * as common from 'test/specs/commonTests'

describe('LabelDetail', () => {
  common.isConformant(LabelDetail)
  common.implementsCreateMethod(LabelDetail)
  common.rendersChildren(LabelDetail)
})

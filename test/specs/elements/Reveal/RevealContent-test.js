import RevealContent from 'src/elements/Reveal/RevealContent'
import * as common from 'test/specs/commonTests'

describe('RevealContent', () => {
  common.isConformant(RevealContent)
  common.rendersChildren(RevealContent)

  common.propKeyOnlyToClassName(RevealContent, 'hidden')
  common.propKeyOnlyToClassName(RevealContent, 'visible')
})

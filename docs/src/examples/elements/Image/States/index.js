import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import React from 'react'

const ImageStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Hidden'
      description='An image can be hidden.'
      examplePath='elements/Image/States/ImageExampleHidden'
    />
    <ComponentExample
      title='Disabled'
      description='An image can show that it is disabled and cannot be selected.'
      examplePath='elements/Image/States/ImageExampleDisabled'
    />
  </ExampleSection>
)

export default ImageStatesExamples

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import React from 'react'

const FeedVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Size'
      description='A feed can have different sizes'
      examplePath='views/Feed/Variations/FeedExampleSizeSmall'
    />
    <ComponentExample examplePath='views/Feed/Variations/FeedExampleSizeLarge' />
  </ExampleSection>
)

export default FeedVariationsExamples

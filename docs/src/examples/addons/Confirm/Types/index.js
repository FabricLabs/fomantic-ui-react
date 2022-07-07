import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import React from 'react'

const ConfirmTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Confirm'
      description='A default confirm.'
      examplePath='addons/Confirm/Types/ConfirmExampleConfirm'
    />
    <ComponentExample
      title='Callbacks'
      description='A confirm has callbacks for cancel and confirm actions.'
      examplePath='addons/Confirm/Types/ConfirmExampleCallbacks'
    />
  </ExampleSection>
)

export default ConfirmTypesExamples

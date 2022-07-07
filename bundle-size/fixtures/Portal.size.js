import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'semantic-ui-react'

function App() {
  return <Portal trigger={<button>A button</button>}>Some content</Portal>
}

ReactDOM.render(<App />, document.querySelector('#root'))

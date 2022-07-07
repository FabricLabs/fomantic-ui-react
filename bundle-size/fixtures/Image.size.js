import React from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'semantic-ui-react'

function App() {
  return <Image src='image.jpg' />
}

ReactDOM.render(<App />, document.querySelector('#root'))

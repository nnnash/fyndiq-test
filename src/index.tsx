import React from 'react'
import ReactDOM from 'react-dom'

import worker from './test-server'
import './index.css'
import App from './App'

worker.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

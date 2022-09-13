import React from 'react'
import ReactDOM from 'react-dom/client'
import Layouts from './layouts'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  import('vconsole').then((m) => new m.default())
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layouts />
  </React.StrictMode>
)

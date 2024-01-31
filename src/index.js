import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <GlobalStyles />
  </>
)

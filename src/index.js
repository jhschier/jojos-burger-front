import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
)

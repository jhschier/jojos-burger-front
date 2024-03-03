import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom/'

import { Footer, Header } from '../components'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('jojosburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Route {...rest} component={component} />
      <Footer />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
export default PrivateRoute

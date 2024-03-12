import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom/'

import { Footer, Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('jojosburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/orders" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
      {!isAdmin && <Footer />}
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
export default PrivateRoute

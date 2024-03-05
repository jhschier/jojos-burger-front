import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/products" />
        <PrivateRoute component={Cart} path="/cart" />

        <PrivateRoute component={Admin} path="/orders" isAdmin />
      </Switch>
    </Router>
  )
}

export default Routes

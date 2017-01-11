import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './components/Home'
import LoginPage from './containers/LoginPage'
import ForgotPasswordPage from './containers/ForgotPasswordPage'
import RegistrationPage from './containers/RegistrationPage'
import Products from './containers/Products'
import NewProduct from './containers/Product/New'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginPage} />
    <Route path="forgot-password" component={ForgotPasswordPage} />
    <Route path="register" component={RegistrationPage} />
    //TODO Add Authentication to routes
    <Route path="products" component={Products}>
      <Route path="new" component={NewProduct} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

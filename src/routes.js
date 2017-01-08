import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Products from './containers/Products'
import NewProduct from './containers/Product/New'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login}/>
    <Route path="registration" component={Registration} />
    <Route path="products" component={Products}>
      <Route path="new" component={NewProduct} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

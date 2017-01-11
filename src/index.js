import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import cookie from 'react-cookie'
import routes from './routes'
import rootReducer from './reducers'
import { AUTH_USER } from './constants/actionTypes'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

const token = cookie.load('token')

if(token){
  store.dispatch({type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}  />
  </Provider>,
  document.getElementById('root')
)

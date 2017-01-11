import axios from 'axios';
import cookie from 'react-cookie';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER } from '../constants/actionTypes';
import config from '../config'

export function errorHandler(dispatch, error, type) {
    let errorMessage = '';

    if(error.data.error) {
      errorMessage = error.data.error;
    } else if(error.data) {
      errorMessage = error.data;
    } else {
      errorMessage = error;
    }

    if(error.status === 401){
      dispatch({
        type: type,
        payload: 'You are not authorized to do this. Please login and try again.'
      });
      logout();
    } else {
      dispatch({
        type: type,
        payload: errorMessage
      })
    }
}

export function loginUser({email, password}){
  return function(dispatch) {
      axios.post(`${config.api}/user/sign_in`, { email, password }, {cors: true})
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = `${config.client_root_url}/dashboard`;
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
  }
}

export function logout() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = `${config.client_root_url}/login`;
  }
}

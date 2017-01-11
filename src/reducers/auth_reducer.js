import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../constants/actionTypes'

const initialState = { error: '', message: '', authenticated: false }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', message:'', authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/actionTypes'

export default (state = {}, action = {}) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return [
          ...state, {
            type: action.message.type,
            text: action.message.text
          }
      ]
    case REMOVE_MESSAGE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state
  }
}

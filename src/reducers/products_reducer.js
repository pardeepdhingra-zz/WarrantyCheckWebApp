import { FETCH_PRODUCTS } from '../constants/actionTypes'

const initialState = { products: [] }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.products
      }
    default:
      return state
  }
}

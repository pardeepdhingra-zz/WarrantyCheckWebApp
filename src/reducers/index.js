import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import flashReducer from './flash_reducer';
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  flash: flashReducer,
  products: productsReducer
});

export default rootReducer;

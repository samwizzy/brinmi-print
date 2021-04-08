import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import brinmi from './brinmi';
import library from './library';
import cart from './cart';
import auth from '../../auth/store/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const createReducer = (asyncReducers) =>
  persistReducer(
    persistConfig,
    combineReducers({
      auth,
      brinmi,
      library,
      cart,
      ...asyncReducers,
    })
  );

export default createReducer;

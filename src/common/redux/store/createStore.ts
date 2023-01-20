import { combineReducers } from 'redux';
import { Middleware, Reducer, ReducersMapObject, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { registerStore } from './storeRegister';
import reducerRegistry from '../reducers/ReducerRegistry';

const initialState: AppState = {};

const combine = (reducers: ReducersMapObject): Reducer => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state: ReducerState = null): ReducerState => state;
    }
  });
  return combineReducers(reducers);
};

export const create = (middlewares?: Middleware[] | Middleware): Store => {
  const reducer = combine(reducerRegistry.getReducers());
  const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
      if (!middlewares) return getDefaultMiddleware();
      return getDefaultMiddleware().concat(
        Array.isArray(middlewares) ? middlewares : [middlewares],
      );
    },
  });
  registerStore(store);

  reducerRegistry.setChangeListener((reducers: ReducersMapObject) => {
    store.replaceReducer(combine(reducers));
  });

  return store;
};

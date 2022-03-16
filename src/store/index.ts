import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { environment } from 'utils/constants';
import * as localforage from 'localforage';

const persistConfig = {
  key: 'frontend-starter-kit',
  storage: localforage,
};

const initialState = {};

const middleWare = [thunk];

const middlewareDev =
  typeof window !== "undefined"
    ? [
        applyMiddleware(...middleWare),
        ...(window && (window as any).__REDUX_DEVTOOLS_EXTENSION__ && environment === 'development'
          ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()]
          : []),
      ]
    : [applyMiddleware(...middleWare)];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, initialState, compose(...middlewareDev));

export let persistor = persistStore(store);

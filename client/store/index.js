import { createStore, applyMiddleware, combineReducers } from 'redux';
import users from './puppies';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ users });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './puppies';

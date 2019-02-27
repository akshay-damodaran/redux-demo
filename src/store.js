import { createStore, combineReducers, applyMiddleware } from 'redux';
import counter from './reducers';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  counter,
});

const store = createStore(rootReducer, { }, applyMiddleware(logger));

export default store;

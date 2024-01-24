// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'; // Import promise middleware
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;

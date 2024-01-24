// reducers/index.js

import { combineReducers } from 'redux';
import sleepReducer from './sleepReducer'; // Import your sleep reducer

const rootReducer = combineReducers({
  sleep: sleepReducer, // Assuming you have a reducer named sleepReducer
  // Add other reducers here
});

export default rootReducer;

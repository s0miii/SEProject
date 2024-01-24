// reducers/sleepReducer.js

const initialState = {
  hoursSlept: 0,
  // other initial state properties
};

// sleepReducer.js
const sleepReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SLEEP_DATA':
      return { ...state, hoursSlept: action.payload };
    case 'FETCH_SLEEP_DATA_SUCCESS':
      return { ...state, sleepData: action.payload };
    case 'FETCH_SLEEP_DATA_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};


export default sleepReducer;

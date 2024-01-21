## Note:
step 1 - installing the below packages
react-redux": "^8.1.3"
@reduxjs/toolkit": "^1.9.7"

step 2 - importing below code in root file (app.js or index.js)
import { Provider } from 'react-redux'
import store from './custom/Redux/Store';

step 3 - wrapping App with Redux Provider similar to context
return(
<Provider store={store}><App /></Provider>
)

## Note: Our custom store
step 4 - to store the variable states and its value
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers/Counter/CounterSlice';
// import textCounterReducer from "../features/textCounter/textCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // textCounter: textCounterReducer
  },
});

## Note: Custom reducer
step 5 - 
a. importing the import { createSlice } from '@reduxjs/toolkit';

b. initial state 
initialState: {
    value: 0,
  }

c. creating the Reducer by createSlice and we also give name to reducer

d. creating handlers like steState
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }

e. return state for using another file
export const selectCount = state => state.counter.value; // we can get state from
export default slice.reducer;  // We can get inc and dec from slice.reduce 
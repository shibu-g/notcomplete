import { createStore } from 'redux';
const SAVE_USER = 'SAVE_USER';

// Define the action creator function
export function saveUser(user) {
  return { type: SAVE_USER, payload: user };
}

// Define the initial state of the Redux store
const initialState = {
  user: null,
};

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Create the Redux store using the reducer function
export const store = createStore(reducer);
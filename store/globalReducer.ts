import { combineReducers } from 'redux';

const INITIAL_STATE = {
  number: 0
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  global: globalReducer,
});
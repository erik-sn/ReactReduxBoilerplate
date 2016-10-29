import types from '../actions/types';

const INITIAL_STATE = 3;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_THING:
      return state + 1;
    case types.REMOVE_THING:
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
}

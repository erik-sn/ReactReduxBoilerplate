import types from './types';


export function addThing() {
  return {
    payload: null,
    type: types.ADD_THING,
  };
}

export function removeThing() {
  return {
    payload: null,
    type: types.REMOVE_THING,
  };
}

import { combineReducers } from 'redux';
import ThingReducer from './thing_reducer';

const rootReducer = combineReducers({
  things: ThingReducer,
});

export default rootReducer;

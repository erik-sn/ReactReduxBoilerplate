import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ThingReducer from './thing_reducer';

const rootReducer = combineReducers({
  things: ThingReducer,
  routing: routerReducer,  // track routing state with redux
});

export default rootReducer;

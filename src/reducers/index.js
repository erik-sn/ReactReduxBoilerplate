import { combineReducers } from 'redux-immutable';

import ThingReducer from './thing_reducer';
import RouteReducer from './route_reducer';

const rootReducer = combineReducers({
  things: ThingReducer,
  routing: RouteReducer,  // track routing state with redux
});

export default rootReducer;

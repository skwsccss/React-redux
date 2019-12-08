import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import authReducer from './authReducer';
import listingsReducer from './listingsReducer';
import visitorsReducer from './visitorReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  authUser: authReducer,
  listings: listingsReducer,
  visitors: visitorsReducer
});

export default rootReducer;

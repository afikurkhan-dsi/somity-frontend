import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { payment } from './payment.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  payment
});

export default rootReducer;

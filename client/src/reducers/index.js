import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import userAuthReducer from './user_auth_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  userAuth: userAuthReducer
});

export default rootReducer;

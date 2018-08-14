import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import userSignupReducer from './user_signup_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  userSignup: userSignupReducer
});

export default rootReducer;

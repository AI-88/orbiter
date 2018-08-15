import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import userSignupReducer from './user_signup_reducer';
import userLoginReducer from './user_login_reducer';
import userAuthReducer from './user_auth_reducer';

const appReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  userAuth: userAuthReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGIN_RESET') {
    state.userLogin = undefined;
  }
  if (action.type === 'USER_SIGNUP_RESET') {
    state.userSignup = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

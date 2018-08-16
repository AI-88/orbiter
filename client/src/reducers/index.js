import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import userAuthReducer from './user_auth_reducer';

const appReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  userAuth: userAuthReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_AUTH_RESET') {
    state.userAuth = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

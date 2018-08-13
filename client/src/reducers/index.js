import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import addNewUsersReducer from './add_new_users_reducer';
import userAuthReducer from './user_auth_reducer';

const appReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  newUsers: addNewUsersReducer,
  userAuth: userAuthReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_NEW_USERS_REGISTRATION') {
    state.newUsers = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

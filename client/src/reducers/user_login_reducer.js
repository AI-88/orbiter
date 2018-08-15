import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actions/types';

const INITIAL_STATE = {
  isLoggingIn: false,
  data: {}
};

function userLoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: action.payload
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        data: action.payload
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userLoginReducer;

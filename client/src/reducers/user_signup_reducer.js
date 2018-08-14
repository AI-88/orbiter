import { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticating: false,
  data: {}
};

function userSignupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        isAuthenticating: action.payload
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        data: action.payload
      };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        isAuthenticating: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userSignupReducer;

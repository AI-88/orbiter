import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAIL, USER_AUTH_SIGNOUT } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticating: false,
  authenticated: '',
  errorMessage: ''
};

function userAuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_AUTH_REQUEST:
      return {
        ...state,
        isAuthenticating: action.payload
      };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        authenticated: action.payload,
        errorMessage: ''
      };
    case USER_AUTH_FAIL:
      return {
        ...state,
        isAuthenticating: false,
        authenticated: '',
        errorMessage: action.payload
      };
    case USER_AUTH_SIGNOUT:
      return {
        ...state,
        isAuthenticating: false,
        authenticated: action.payload,
        errorMessage: ''
      };
    default:
      return state;
  }
};

export default userAuthReducer;

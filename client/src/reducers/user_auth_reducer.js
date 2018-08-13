import { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAIL } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticating: false,
  data: {}
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
        data: action.payload
      };
    case USER_AUTH_FAIL:
      return {
        ...state,
        isAuthenticating: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userAuthReducer;

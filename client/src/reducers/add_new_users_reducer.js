import { REQUEST_NEW_USERS_REGISTRATION, RECEIVE_NEW_USERS_REGISTRATION } from '../actions/types';

const INITIAL_STATE = {
  isCreated: false
};

function addNewUsersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_NEW_USERS_REGISTRATION:
      return {
        ...state,
        isCreated: action.payload
      };
    case RECEIVE_NEW_USERS_REGISTRATION:
      return {
        ...state,
        isCreated: true
      };
    default:
      return state;
  }
};

export default addNewUsersReducer;

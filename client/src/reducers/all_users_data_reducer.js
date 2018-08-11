import _ from 'lodash';
import { FETCH_ALL_USERS_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: {}
};

function usersDataReducer(state = INITIAL_STATE, action) {
  switch (FETCH_ALL_USERS_DATA) {
    case action.type:
      return {
        ...state,
        data: _.map(action.payload, (value, key) => {
          return {
            ...value,
            id: key
          };
        })
      };
    default:
      return state;
  }
};

export default usersDataReducer;

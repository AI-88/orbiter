import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const requestNewUsersRegistration = () => ({
  type: types.REQUEST_NEW_USERS_REGISTRATION,
  payload: false
});

const receiveNewUsersRegistration = request => ({
  type: types.RECEIVE_NEW_USERS_REGISTRATION,
  payload: request
});

export const addNewUsers = (values, callback) => async dispatch => {
  dispatch(requestNewUsersRegistration());
  const request = await axios.post('/api/users', values);
  dispatch(receiveNewUsersRegistration(request));
  callback();
};

export const resetNewUsersRegistration = () => ({
  type: types.RESET_NEW_USERS_REGISTRATION
});

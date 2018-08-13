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

export const addNewUsers = (values, callback) => dispatch => {
  dispatch(requestNewUsersRegistration());
  const request = axios.post('/api/users', values).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
  dispatch(receiveNewUsersRegistration(request));
  callback();
};

export const resetNewUsersRegistration = () => ({
  type: types.RESET_NEW_USERS_REGISTRATION
});

const userAuthRequest = () => ({
  type: types.USER_AUTH_REQUEST
});

const userAuthSuccess = data => ({
  type: types.USER_AUTH_SUCCESS,
  payload: data
});

const userAuthFail = error => ({
  type: types.USER_AUTH_FAIL,
  payload: error
});

export const authUser = (email, password, callback) => dispatch => {
  dispatch(userAuthRequest());
  const dataObj = {
    email,
    password,
    returnSecureToken: true
  };
  axios.post('/api/auth', dataObj).then(response => {
    console.log(response);
    callback();
  }).catch(error => {
    console.log(error.response.statusText);
  });
};

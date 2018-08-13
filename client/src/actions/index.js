import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const userAuthRequest = () => ({
  type: types.USER_AUTH_REQUEST,
  payload: true
});

const userAuthSuccess = response => ({
  type: types.USER_AUTH_SUCCESS,
  payload: response
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
    dispatch(userAuthSuccess(response));
    callback();
  }).catch(error => {
    dispatch(userAuthFail(error));
  });
};

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
    const { data } = response;
    console.log(data);
    dispatch(userAuthSuccess(data));
    callback();
  }).catch(error => {
    const { response: statusText } = error;
    dispatch(userAuthFail(statusText));
    callback();
  });
};

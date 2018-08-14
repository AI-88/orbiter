import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const userSignupRequest = () => ({
  type: types.USER_SIGNUP_REQUEST,
  payload: true
});

const userSignupSuccess = response => ({
  type: types.USER_SIGNUP_SUCCESS,
  payload: response
});

const userSignupFail = error => ({
  type: types.USER_SIGNUP_FAIL,
  payload: error
});

export const signupUser = (email, password, callback) => dispatch => {
  dispatch(userSignupRequest());
  const dataObj = {
    email,
    password,
    returnSecureToken: true
  };
  axios.post('/api/auth', dataObj).then(response => {
    dispatch(userSignupSuccess(response));
    callback();
  }).catch(error => {
    dispatch(userSignupFail(error));
  });
};

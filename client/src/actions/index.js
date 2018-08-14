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
  axios.post('/api/signup', dataObj).then(response => {
    dispatch(userSignupSuccess(response));
    callback();
  }).catch(error => {
    dispatch(userSignupFail(error));
  });
};

const userLoginRequest = () => ({
  type: types.USER_LOGIN_REQUEST,
  payload: true
});

const userLoginSucess = response => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: response
});

const userLoginFail = error => ({
  type: types.USER_LOGIN_FAIL,
  payload: error
});

export const loginUser = (email, password) => dispatch => {
  dispatch(userLoginRequest());
  const dataObj = {
    email,
    password,
    returnSecureToken: true
  };
  axios.post('/api/login', dataObj).then(response => {
    console.log(response);
    const { data } = response;
    dispatch(userLoginSucess(data));
  }).catch(error => {
    console.log(error);
    dispatch(userLoginFail(error));
  });
};

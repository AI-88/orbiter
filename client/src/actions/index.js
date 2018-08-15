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

export const userSignupReset = () => ({
  type: types.USER_SIGNUP_RESET
});

export const signupUser = (email, password, callback) => async dispatch => {
  dispatch(userAuthRequest());
  const dataObj = {
    email,
    password,
    returnSecureToken: true
  };
  const request = await axios.post('/api/signup', dataObj);
  const { data, data: { error } } = request;
  if (error) {
    dispatch(userAuthFail(error));
  } else {
    dispatch(userAuthSuccess(data));
    callback();
  }
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

export const userLoginReset = () => ({
  type: types.USER_LOGIN_RESET
});

export const loginUser = (email, password) => async dispatch => {
  dispatch(userLoginRequest());
  const dataObj = {
    email,
    password,
    returnSecureToken: true
  };
  const request = await axios.post('/api/login', dataObj);
  const { data, data: { error } } = request;
  if (error) {
    dispatch(userLoginFail(error));
  } else {
    dispatch(userLoginSucess(data));
  }
};

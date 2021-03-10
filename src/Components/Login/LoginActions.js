import {
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  SUCCESS_LOGIN_REQUEST,
  FAILURE_LOGIN_REQUEST,
} from './LoginActionTypes';
import axios from 'axios';

export const inputLoginEmail = (e) => {
  return {
    type: INPUT_LOGIN_EMAIL,
    payload: e,
  };
};

export const inputLoginPassword = (e) => {
  return {
    type: INPUT_LOGIN_PASSWORD,
    payload: e,
  };
};

export const requestLogin = (e) => {
  return (dispatch, getState) => {
    let { email, password } = getState().LoginReducer;
    return axios
      .post(`http://localhost:3000/#`, {
        email,
        password,
      })
      .then((response) => {
        dispatch({
          type: SUCCESS_LOGIN_REQUEST,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOGIN_REQUEST,
        });
      });
  };
};

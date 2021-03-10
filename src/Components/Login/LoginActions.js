import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from './LoginActionTypes';

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

import { SET_REGISTER_FORM, SET_LOGIN_FORM } from './MainActionTypes';

export const setRegisterForm = () => {
  return {
    type: SET_REGISTER_FORM,
  };
};

export const setLoginForm = () => {
  return {
    type: SET_LOGIN_FORM,
  };
};

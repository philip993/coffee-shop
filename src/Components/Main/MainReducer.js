import { SET_REGISTER_FORM, SET_LOGIN_FORM } from './MainActionTypes';

const initialState = {
  registerForm: true,
  loginForm: null,
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_FORM:
      return {
        registerForm: true,
        loginForm: false,
      };
    case SET_LOGIN_FORM:
      return {
        registerForm: false,
        loginForm: true,
      };

    default:
      return state;
  }
};

import {
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  SUCCESS_LOGIN_REQUEST,
  FAILURE_LOGIN_REQUEST,
} from './LoginActionTypes';

const initialState = {
  email: '',
  password: '',
  user: null,
  loginError: null,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case INPUT_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
        loginError: false,
        email: '',
        password: '',
      };
    case FAILURE_LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        loginError: true,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

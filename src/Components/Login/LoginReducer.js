import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from './LoginActionTypes';

const initialState = {
  email: '',
  password: '',
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
    default:
      return state;
  }
};

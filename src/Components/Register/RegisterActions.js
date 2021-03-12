import {
  SET_REGISTER_NEXT_PAGE,
  SET_REGISTER_PREVIOUS_PAGE,
  INPUT_REGISTER_FULL_NAME,
} from './RegisterActionTypes';
import { INPUT_LOGIN_EMAIL } from '../Login/LoginActionTypes';

export const setRegisterFirstPage = () => {
  return {
    type: SET_REGISTER_NEXT_PAGE,
  };
};

export const setRegisterPreviousPage = () => {
  return {
    type: SET_REGISTER_PREVIOUS_PAGE,
  };
};

export const inputRegisterFullname = (e) => {
  return {
    type: INPUT_REGISTER_FULL_NAME,
    payload: e,
  };
};

export const inputRegisterEmail = (e) => {
  return {
    type: INPUT_LOGIN_EMAIL,
    payload: e,
  };
};

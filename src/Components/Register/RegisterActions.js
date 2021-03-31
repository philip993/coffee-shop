import {
  SET_REGISTER_NEXT_PAGE,
  SET_REGISTER_PREVIOUS_PAGE,
  INPUT_REGISTER_FULL_NAME,
  INPUT_REGISTER_PASSWORD,
  INPUT_REGISTER_REPEAT_PASSWORD,
  INPUT_REGISTER_ADDRESS,
  INPUT_REGISTER_CITY,
  INPUT_REGISTER_CARD,
  INPUT_REGISTER_PHONE,
  INPUT_REGISTER_EMAIL,
  SUCCESS_REQUEST_REGISTER,
  FAILURE_REQUEST_REGISTER,
} from './RegisterActionTypes';

import axios from 'axios';

export const requestRegister = () => {
  return (dispatch, getState) => {
    let {
      regFullName,
      regEmail,
      regPassword,
      regRepeatPassword,
      regAddress,
      regCity,
      regCard,
      regPhone,
    } = getState().RegisterReducer;
    return axios
      .post(`http://localhost:3000/#`, {
        regFullName,
        regEmail,
        regPassword,
        regRepeatPassword,
        regAddress,
        regCity,
        regCard,
        regPhone,
      })
      .then((response) => {
        dispatch({
          type: SUCCESS_REQUEST_REGISTER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_REQUEST_REGISTER,
        });
      });
  };
};

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
    type: INPUT_REGISTER_EMAIL,
    payload: e,
  };
};

export const inputRegisterPassword = (e) => {
  return {
    type: INPUT_REGISTER_PASSWORD,
    payload: e,
  };
};

export const inputRegisterRepeatPassword = (e) => {
  return {
    type: INPUT_REGISTER_REPEAT_PASSWORD,
    payload: e,
  };
};

export const inputRegisterAddress = (e) => {
  return {
    type: INPUT_REGISTER_ADDRESS,
    payload: e,
  };
};

export const inputRegisterCity = (e) => {
  return {
    type: INPUT_REGISTER_CITY,
    payload: e,
  };
};

export const inputRegisterCard = (e) => {
  return {
    type: INPUT_REGISTER_CARD,
    payload: e,
  };
};

export const inputRegisterPhone = (e) => {
  return {
    type: INPUT_REGISTER_PHONE,
    payload: e,
  };
};

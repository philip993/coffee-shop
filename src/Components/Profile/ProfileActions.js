import {
  FAILURE_CREATE_ORDER,
  FAILURE_GET_ORDERS,
  FAILURE_GET_PROFILE_INFO,
  SUCCESS_CREATE_ORDER,
  SUCCESS_GET_ORDERS,
  SUCCESS_GET_PROFILE_INFO,
} from './ProfileActionTypes';
import axios from 'axios';

export const requestGetOrders = () => {
  return (dispatch, getStatus) => {
    return axios
      .get(`http://localhost:3000/#`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_ORDERS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_ORDERS,
        });
      });
  };
};

export const requestCreateOrder = () => {
  return (dispatch, getState) => {
    let { cartItems } = getState().CartReducer;

    return axios
      .post(`http://localhost:3000/#`, {
        cart: cartItems,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CREATE_ORDER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_CREATE_ORDER,
        });
      });
  };
};

export const requestGetProfileInfo = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:3000/#`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_PROFILE_INFO,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_PROFILE_INFO,
        });
      });
  };
};

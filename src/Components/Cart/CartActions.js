import {
  SUCCESS_REMOVE_ITEM_FROM_CART,
  FAILURE_REMOVE_ITEM_FROM_CART,
  SUCCESS_CLEAR_CART,
  FAILURE_CLEAR_CART,
  SUCCESS_GET_CART_ITEMS,
  FAILURE_GET_CART_ITEMS,
} from './CartActionTypes';
import axios from 'axios';

export const requestRemoveCartItem = (e) => {
  return (dispatch, getState) => {
    let currentUser;
    let currentItem;

    return axios
      .delete(`http://localhost:3000/#/${currentUser}/${currentItem}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_REMOVE_ITEM_FROM_CART,
          payload: response.data.deletedItem,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FAILURE_REMOVE_ITEM_FROM_CART,
        });
      });
  };
};

export const requestClearCart = () => {
  return (dispatch, getState) => {
    let currentUser;
    return axios
      .delete(`http://localhost:3000/#/${currentUser}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_CLEAR_CART,
          payload: [],
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FAILURE_CLEAR_CART,
        });
      });
  };
};

export const requestGetCartItems = () => {
  return (dispatch, getState) => {
    let currentUser;
    return axios
      .get(`http://localhost:3000/#/${currentUser}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_GET_CART_ITEMS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_GET_CART_ITEMS,
        });
      });
  };
};

import { SUCCESS_CLEAR_CART, FAILURE_CLEAR_CART } from './CartActionTypes';

const initialState = {
  cartItems: [],
  cartError: null,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case FAILURE_CLEAR_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};

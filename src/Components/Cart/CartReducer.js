import {
  SUCCESS_CLEAR_CART,
  FAILURE_CLEAR_CART,
  SUCCESS_REMOVE_ITEM_FROM_CART,
  FAILURE_REMOVE_ITEM_FROM_CART,
  SUCCESS_GET_CART_ITEMS,
  FAILURE_GET_CART_ITEMS,
  COUNT_NUMBER_OF_ITEMS_IN_CART,
} from './CartActionTypes';

const initialState = {
  cartItems: [],
  cartError: null,
  cartItemsNo: 0,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CLEAR_CART:
      return {
        ...state,
        cartItems: action.payload,
        cartError: false,
      };
    case FAILURE_CLEAR_CART:
      return {
        ...state,
        cartError: true,
      };
    case SUCCESS_REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartError: false,
        cartItems: [
          ...state.cartItems.slice(0, action.payload),
          ...state.cartItems.slice(action.payload + 1),
        ],
      };
    case FAILURE_REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartError: true,
      };
    case SUCCESS_GET_CART_ITEMS:
      return {
        ...state,
        cartError: false,
        cartItems: action.payload,
      };
    case FAILURE_GET_CART_ITEMS:
      return {
        ...state,
        cartError: true,
      };
    case COUNT_NUMBER_OF_ITEMS_IN_CART:
      return {
        ...state,
        cartItemsNo: state.cartItems.length,
      };
    default:
      return state;
  }
};

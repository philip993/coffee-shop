import {
  FAILURE_CREATE_ORDER,
  FAILURE_GET_ORDERS,
  FAILURE_GET_PROFILE_INFO,
  SUCCESS_CREATE_ORDER,
  SUCCESS_GET_ORDERS,
  SUCCESS_GET_PROFILE_INFO,
} from './ProfileActionTypes';

const initialState = {
  profile: [],
  profileError: null,
  orders: [],
  ordersError: null,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_PROFILE_INFO:
      return {
        ...state,
        profile: action.payload,
        profileError: false,
      };
    case FAILURE_GET_PROFILE_INFO:
      return {
        ...state,
        profile: null,
        profileError: true,
      };
    case SUCCESS_GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        ordersError: false,
      };
    case FAILURE_GET_ORDERS:
      return {
        ...state,
        orders: null,
        ordersError: true,
      };
    case SUCCESS_CREATE_ORDER:
      return {
        ...state,
        orders: action.payload,
        ordersError: false,
      };
    case FAILURE_CREATE_ORDER:
      return {
        ...state,
        orders: null,
        ordersError: true,
      };
    default:
      return state;
  }
};

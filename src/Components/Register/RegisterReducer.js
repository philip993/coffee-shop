import {
  SET_REGISTER_NEXT_PAGE,
  SET_REGISTER_PREVIOUS_PAGE,
  INPUT_REGISTER_FULL_NAME,
  INPUT_REGISTER_EMAIL,
  INPUT_REGISTER_PASSWORD,
  INPUT_REGISTER_REPEAT_PASSWORD,
  INPUT_REGISTER_ADDRESS,
  INPUT_REGISTER_CITY,
  INPUT_REGISTER_CARD,
  INPUT_REGISTER_PHONE,
} from './RegisterActionTypes';

const initialState = {
  page: '',
  regFullName: '',
  regEmail: '',
  regPassword: '',
  regRepeatPassword: '',
  regAddress: '',
  regCity: '',
  regCard: '',
  regPhone: '',
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_NEXT_PAGE:
      return {
        ...state,
        page: 'next',
      };
    case SET_REGISTER_PREVIOUS_PAGE:
      return {
        ...state,
        page: 'previous',
      };
    case INPUT_REGISTER_FULL_NAME:
      return {
        ...state,
        regFullName: action.payload,
      };
    case INPUT_REGISTER_EMAIL:
      return {
        ...state,
        regEmail: action.payload,
      };
    case INPUT_REGISTER_PASSWORD:
      return {
        ...state,
        regPassword: action.payload,
      };
    case INPUT_REGISTER_REPEAT_PASSWORD:
      return {
        ...state,
        regRepeatPassword: action.payload,
      };
    case INPUT_REGISTER_ADDRESS:
      return {
        ...state,
        regAddress: action.payload,
      };
    case INPUT_REGISTER_CITY:
      return {
        ...state,
        regCity: action.payload,
      };
    case INPUT_REGISTER_CARD:
      return {
        ...state,
        regCard: action.payload,
      };
    case INPUT_REGISTER_PHONE:
      return {
        ...state,
        regPhone: action.payload,
      };
    default:
      return state;
  }
};

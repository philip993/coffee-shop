import { SET_REGISTER_NEXT_PAGE } from './RegisterActionTypes';

const initialState = {
  page: '',
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_NEXT_PAGE:
      return {
        ...state,
        page: 'next',
      };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { MainReducer } from '../Components/Main/MainReducer';
import { RegisterReducer } from '../Components/Register/RegisterReducer';
import { LoginReducer } from '../Components/Login/LoginReducer';
import { CartReducer } from '../Components/Cart/CartReducer';

const rootReducer = combineReducers({
  MainReducer,
  RegisterReducer,
  LoginReducer,
  CartReducer,
});

export default rootReducer;

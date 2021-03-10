import { combineReducers } from 'redux';
import { MainReducer } from '../Components/Main/MainReducer';
import { RegisterReducer } from '../Components/Register/RegisterReducer';
import { LoginReducer } from '../Components/Login/LoginReducer';

const rootReducer = combineReducers({
  MainReducer,
  RegisterReducer,
  LoginReducer,
});

export default rootReducer;

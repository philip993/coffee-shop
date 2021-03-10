import React from 'react';
import './Login.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputLoginPassword,
  inputLoginEmail,
  requestLogin,
} from './LoginActions';

const Login = () => {
  const { email, password } = useSelector((state) => ({
    ...state.LoginReducer,
  }));
  const dispatch = useDispatch();

  const handleInputEmail = (e) => {
    dispatch(inputLoginEmail(e.target.value));
  };

  const handleInputPassword = (e) => {
    dispatch(inputLoginPassword(e.target.value));
  };

  const handleRequestLogin = (e) => {
    dispatch(requestLogin());
  };

  return (
    <div className="login">
      <div className="contactForm">
        <h1>Login</h1>
        <form className="form">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Email *</p>
            </FormLabel>
            <InputBase
              className="formInput"
              value={email}
              onChange={handleInputEmail}
              placeholder="e.g. john@john.com"
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Password *</p>
            </FormLabel>
            <InputBase
              className="formInput"
              value={password}
              onChange={handleInputPassword}
              placeholder="Enter a valid password...."
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Button onClick={handleRequestLogin} className="btn">
              Login
            </Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Login;

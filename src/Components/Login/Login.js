import React from 'react';
import './Login.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';

const Login = () => {
  return (
    <div className="login">
      <div className="contactForm">
        <h1>Login</h1>
        <form className="form">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Email *</p>
            </FormLabel>
            <InputBase className="formInput" placeholder="e.g. john@john.com" />
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Password *</p>
            </FormLabel>
            <InputBase
              className="formInput"
              placeholder="Enter a valid password...."
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Button className="btn">Login</Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Login;

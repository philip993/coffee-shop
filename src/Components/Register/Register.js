import React from 'react';
import './RegisterStyle.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';

const Register = () => {
  return (
    <div className="register">
      <div className="contactForm">
        <h1>Register</h1>
        <form className="form">
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Full Name *</p>
            </FormLabel>
            <InputBase className="formInput" placeholder="e.g. John Doe" />
          </FormGroup>
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
              placeholder="Must be at least 4 characters.."
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Phone *</p>
            </FormLabel>
            <InputBase className="formInput" placeholder="e.g. +100 555 1111" />
          </FormGroup>
          <FormGroup className="formGroup">
            <Button className="btn">Register</Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import './RegisterStyle.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';

const RegisterInfo = () => {
  return (
    <div className="contactForm">
      <h1>Register</h1>
      <form className="form">
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Address *</p>
          </FormLabel>
          <InputBase className="formInput" placeholder="e.g. 5th Avenue" />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>City *</p>
          </FormLabel>
          <InputBase className="formInput" placeholder="e.g. New York" />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Card *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="Last Four Numbers...."
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
  );
};

export default RegisterInfo;

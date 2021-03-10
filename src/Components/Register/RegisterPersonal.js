import React from 'react';
import './RegisterStyle.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setRegisterFirstPage } from './RegisterActions';

const RegisterPersonal = () => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(setRegisterFirstPage());
  };
  return (
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
            <p>Repeat Password *</p>
          </FormLabel>
          <InputBase className="formInput" placeholder="e.g. +100 555 1111" />
        </FormGroup>
        <FormGroup className="formGroup">
          <Button onClick={handleNextPage} className="btn">
            Next
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default RegisterPersonal;

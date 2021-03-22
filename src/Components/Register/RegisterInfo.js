import React from 'react';
import './RegisterStyle.scss';
import { FormGroup, FormLabel, InputBase, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputRegisterAddress,
  inputRegisterCity,
  inputRegisterCard,
  inputRegisterPhone,
  requestRegister,
} from './RegisterActions';

const RegisterInfo = () => {
  const { regAddress, regCity, regCard, regPhone } = useSelector((state) => ({
    ...state.RegisterReducer,
  }));
  const dispatch = useDispatch();

  const handleInputAddress = (e) => {
    dispatch(inputRegisterAddress(e.target.value));
  };

  const handleInputCity = (e) => {
    dispatch(inputRegisterCity(e.target.value));
  };

  const handleInputCard = (e) => {
    dispatch(inputRegisterCard(e.target.value));
  };

  const handleInputPhone = (e) => {
    dispatch(inputRegisterPhone(e.target.value));
  };

  const handleRegistration = () => {
    dispatch(requestRegister());
  };

  return (
    <div className="contactForm">
      <h1>Register</h1>
      <form className="form">
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Address *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="e.g. 5th Avenue"
            value={regAddress}
            onChange={handleInputAddress}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>City *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="e.g. New York"
            value={regCity}
            onChange={handleInputCity}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Card *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="Last Four Numbers...."
            value={regCard}
            onChange={handleInputCard}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Phone *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="e.g. +100 555 1111"
            value={regPhone}
            onChange={handleInputPhone}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Button className="btn" onClick={handleRegistration}>
            Register
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default RegisterInfo;

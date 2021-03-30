import React from 'react';
import './RegisterStyle.scss';
import {
  FormGroup,
  FormLabel,
  InputBase,
  Button,
  FormHelperText,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputRegisterAddress,
  inputRegisterCity,
  inputRegisterCard,
  inputRegisterPhone,
  requestRegister,
} from './RegisterActions';
import { Controller, useForm } from 'react-hook-form';

const RegisterInfo = () => {
  const { regAddress, regCity, regCard, regPhone } = useSelector((state) => ({
    ...state.RegisterReducer,
  }));
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, message, control } = useForm();

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
    console.log('register');
  };

  return (
    <div className="contactForm">
      <h1>Register</h1>
      <form
        className="form"
        // onSubmit={handleSubmit(handleRegistration)}
      >
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Address *</p>
          </FormLabel>
          <Controller
            control={control}
            name="regAddress"
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="regAddress"
                placeholder="e.g. 5th Avenue"
                value={regAddress}
                onChange={handleInputAddress}
                inputRef={register({
                  required: 'This field is required',
                  minLength: {
                    value: 4,
                    message: 'Must be at leat 4 characters',
                  },
                })}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.regAddress && errors.regAddress.message}
          </FormHelperText>
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
          <Button
            className="btn"
            type="submit"
            onClick={handleSubmit(handleRegistration)}
          >
            Register
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default RegisterInfo;

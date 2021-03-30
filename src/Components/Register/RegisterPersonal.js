import React from 'react';
import './RegisterStyle.scss';
import {
  FormGroup,
  FormLabel,
  InputBase,
  Button,
  FormHelperText,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRegisterFirstPage,
  inputRegisterEmail,
  inputRegisterFullname,
  inputRegisterPassword,
  inputRegisterRepeatPassword,
} from './RegisterActions';
import { Controller, useForm } from 'react-hook-form';

const RegisterPersonal = () => {
  const { regFullName, regEmail, regPassword, regRepeatPassword } = useSelector(
    (state) => ({
      ...state.RegisterReducer,
    })
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, message, control } = useForm();

  const handleNextPage = () => {
    dispatch(setRegisterFirstPage());
  };

  const handleInputFullname = (e) => {
    dispatch(inputRegisterFullname(e.target.value));
  };

  const handleInputEmail = (e) => {
    dispatch(inputRegisterEmail(e.target.value));
  };

  const handleInputPassword = (e) => {
    dispatch(inputRegisterPassword(e.target.value));
  };

  const handleInputRepeatPassword = (e) => {
    dispatch(inputRegisterRepeatPassword(e.target.value));
  };

  return (
    <div className="contactForm">
      <h1>Register</h1>
      <form className="form">
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Full Name *</p>
          </FormLabel>
          <Controller
            name="regFullname"
            control={control}
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="regFullname"
                placeholder="e.g. John Doe"
                value={regFullName}
                onChange={handleInputFullname}
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
            {errors.regFullname && errors.regFullname.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Email *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="e.g. john@john.com"
            value={regPassword}
            onChange={handleInputPassword}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Password *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="Must be at least 4 characters.."
            value={regEmail}
            onChange={handleInputEmail}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Repeat Password *</p>
          </FormLabel>
          <InputBase
            className="formInput"
            placeholder="e.g. +100 555 1111"
            value={regRepeatPassword}
            onChange={handleInputRepeatPassword}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Button onClick={handleSubmit(handleNextPage)} className="btn">
            Next
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default RegisterPersonal;

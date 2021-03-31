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
  const { register, handleSubmit, errors, message, control } = useForm({
    reValidateMode: 'onBlur',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const handleNextPage = () => {
    dispatch(setRegisterFirstPage());
  };

  const handleInputFullname = (e) => {
    dispatch(inputRegisterFullname(e.target.value));
    console.log(e);
    console.log(e.target.value);
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
                  required: 'This field is required!',
                  minLength: {
                    value: 4,
                    message: 'Must be at leat four characters',
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
          <Controller
            name="regEmail"
            control={control}
            render={({ onChange, value, name, message }) => (
              <InputBase
                className="formInput"
                name="regEmail"
                placeholder="e.g. john@john.com"
                value={regEmail}
                onChange={handleInputEmail}
                inputRef={register({
                  required: 'This field is required!',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message: 'Enter a valid E-Mail Address',
                  },
                })}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.regEmail && errors.regEmail.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Password *</p>
          </FormLabel>
          <Controller
            name="regPassword"
            control={control}
            render={({ onChange, value, message, name }) => (
              <InputBase
                className="formInput"
                name="regPassword"
                placeholder="Enter your password.."
                type="password"
                value={regPassword}
                onChange={handleInputPassword}
                inputRef={register({
                  required: 'This field is required!',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      'Password must be at least eight characters, including uppercase and lower case letter and a number.',
                  },
                })}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.regPassword && errors.regPassword.message}
          </FormHelperText>
        </FormGroup>
        <FormGroup className="formGroup">
          <FormLabel className="formLabel">
            <p>Repeat Password *</p>
          </FormLabel>
          <Controller
            name="regRepeatPassword"
            control={control}
            render={({ onChange, value, message, name }) => (
              <InputBase
                className="formInput"
                name="regRepeatPassword"
                type="password"
                placeholder="Repeat your password.."
                value={regRepeatPassword}
                onChange={handleInputRepeatPassword}
                inputRef={register({
                  required: 'This Field is required!',
                  validate: (value) =>
                    value === regPassword || 'Password does not match!',
                })}
              />
            )}
          />
          <FormHelperText className="formHelperText" error>
            {errors.regRepeatPassword && errors.regRepeatPassword.message}
          </FormHelperText>
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

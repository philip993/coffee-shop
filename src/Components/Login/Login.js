import React from 'react';
import './Login.scss';
import {
  FormGroup,
  FormLabel,
  InputBase,
  Button,
  FormHelperText,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputLoginPassword,
  inputLoginEmail,
  requestLogin,
} from './LoginActions';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const { email, password } = useSelector((state) => ({
    ...state.LoginReducer,
  }));
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
            <Controller
              name="logEmail"
              control={control}
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="logEmail"
                  value={email}
                  onChange={handleInputEmail}
                  placeholder="e.g. john@john.com"
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
              {errors.logEmail && errors.logEmail.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <FormLabel className="formLabel">
              <p>Password *</p>
            </FormLabel>
            <Controller
              name="logPassword"
              control={control}
              render={({ onChange, value, name, message }) => (
                <InputBase
                  className="formInput"
                  name="logPassword"
                  type="password"
                  value={password}
                  onChange={handleInputPassword}
                  placeholder="Enter a valid password...."
                  inputRef={register({
                    required: 'This field is required!',
                    minLength: {
                      value: 8,
                      message: 'Minimum of eight characters is required!',
                    },
                  })}
                />
              )}
            />
            <FormHelperText className="formHelperText" error>
              {errors.logPassword && errors.logPassword.message}
            </FormHelperText>
          </FormGroup>
          <FormGroup className="formGroup">
            <Button onClick={handleSubmit(handleRequestLogin)} className="btn">
              Login
            </Button>
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default Login;

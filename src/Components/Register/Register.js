import React, { useState } from 'react';
import './RegisterStyle.scss';
import RegisterPersonal from './RegisterPersonal';
import RegisterInfo from './RegisterInfo';
import { useSelector } from 'react-redux';

const Register = () => {
  const { page } = useSelector((state) => ({
    ...state.RegisterReducer,
  }));

  return (
    <div className="register">
      {page === '' ? (
        <RegisterPersonal />
      ) : page === 'next' ? (
        <RegisterInfo />
      ) : (
        ''
      )}
    </div>
  );
};

export default Register;

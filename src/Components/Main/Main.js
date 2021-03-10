import React from 'react';
import './MainStyle.scss';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../Login/Login';

const Main = () => {
  const { registerForm, loginForm } = useSelector((state) => ({
    ...state.MainReducer,
  }));
  const dispatch = useDispatch();

  return (
    <div className="main">
      <Navbar />
      <div className="firstMainDiv">
        {registerForm && !loginForm ? (
          <Register />
        ) : !registerForm && loginForm ? (
          <Login />
        ) : (
          ''
        )}

        <div className="mainImage">
          <div className="mainText">
            <span>
              <h1>Sign up for more Coffee Adventures</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

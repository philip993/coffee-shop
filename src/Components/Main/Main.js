import React from 'react';
import './MainStyle.scss';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="firstMainDiv">
        <Register />
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

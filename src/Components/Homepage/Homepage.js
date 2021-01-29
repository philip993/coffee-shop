import React from 'react';
import './HomepageStyle.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '../../img/menu.svg';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepageFirstDiv">
        <div className="homepageButtonContainer">
          <Button className="signInButton">Sign In</Button>
          <Button className="signUpButton">Sign Up</Button>
        </div>

        <h1>Coffee Shop</h1>
        <h2>Don't wait in line, make your order now!</h2>
      </div>
      <div className="homepageSecondDiv">
        <div className="link">
          <img src={MenuIcon} alt="menu" />
          <Link>Check Menu</Link>
        </div>
        <div className="link">
          {' '}
          Orders
          <Link>Show Orders</Link>
        </div>
        <div className="link">
          {' '}
          Profile
          <Link>View Profile</Link>
        </div>
        <div className="link">
          {' '}
          Contact
          <Link>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

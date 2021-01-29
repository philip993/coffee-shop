import React from 'react';
import './HomepageStyle.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '../../img/menu.svg';
import OrderIcon from '../../img/order.svg';
import ProfileIcon from '../../img/profile.svg';
import ContactIcon from '../../img/contact.svg';

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
        <div className="linkContainer">
          <img className="icons" src={MenuIcon} alt="menu" />
          <Link className="link">Check Menu</Link>
        </div>
        <div className="linkContainer">
          <img className="icons" src={OrderIcon} alt="order" />
          <Link className="link">Show Orders</Link>
        </div>
        <div className="linkContainer">
          <img className="icons" src={ProfileIcon} alt="profile" />
          <Link className="link">View Profile</Link>
        </div>
        <div className="linkContainer">
          <img className="icons" src={ContactIcon} alt="contact" />
          <Link className="link">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

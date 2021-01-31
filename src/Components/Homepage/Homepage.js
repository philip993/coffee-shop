import React from 'react';
import './HomepageStyle.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '../../img/menu.svg';
import OrderIcon from '../../img/order.svg';
import ProfileIcon from '../../img/profile.svg';
import ContactIcon from '../../img/contact.svg';
import ContactUs from '../../img/c2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
        <div className="linkContainer"></div>
      </div>
      <div className="homepageFifthDiv">
        <img className="contactImage" src={ContactUs} alt="contact us" />
        <span>
          <Link className="link">Contact Us</Link>
        </span>
      </div>
      <div className="homepageThirdDiv">
        <div className="one">
          <Link className="link">
            Coffe-Shop <FontAwesomeIcon icon={faCoffee} />
          </Link>
        </div>
        <div className="two">
          <Link className="link">Company</Link>
          <Link className="link">Vision</Link>
          <Link className="link">Mision</Link>
        </div>
        <div className="three">
          <Link className="link">Career</Link>
          <Link className="link">Clients</Link>
          <Link className="link">FAQ</Link>
        </div>
      </div>
      <div className="homepageFourthDiv">
        <span className="messageContainer">
          <FontAwesomeIcon icon={faCoffee} /> All rights reserved, 2021
        </span>

        <span className="iconsContainer">
          <FontAwesomeIcon className="brand" icon={faFacebook} />
          <FontAwesomeIcon className="brand" icon={faInstagram} />
          <FontAwesomeIcon className="brand" icon={faFacebookMessenger} />
          <FontAwesomeIcon className="brand" icon={faTwitter} />
        </span>
      </div>
    </div>
  );
};

export default Homepage;

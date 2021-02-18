import React from 'react';
import './FooterStyle.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faFacebookMessenger,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerFirstDiv">
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
        <div className="four">
          <Link className="link">Location</Link>
          <Link className="link">Delivery</Link>
        </div>
      </div>
      <div className="footerSecondDiv">
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

export default Footer;

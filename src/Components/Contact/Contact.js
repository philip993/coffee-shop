import React from 'react';
import './ContactStyle.scss';
import Navbar from '../Navbar/Navbar';
import { FormGroup, FormLabel, InputBase } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contactFirstDiv">
        <div className="contactImage">
          <div className="contactAddress">
            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            <span>
              <h3>Address</h3>
              <h4>Mountain Hills, New York</h4>
            </span>
          </div>
          <div className="contactPhone">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <span>
              <h3>Let's Talk</h3>
              <h4>+100 555 4444</h4>
            </span>
          </div>
          <div className="contactMail">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <span>
              <h3>Support</h3>
              <h4>info@coffeeshop.com</h4>
            </span>
          </div>
        </div>
        <div className="contactForm">
          <h1>Form</h1>
          <form className="form">
            <FormGroup className="formGroup">
              <FormLabel className="formLabel">Full Name *</FormLabel>
              <InputBase className="formInput" placeholder="e.g. John Doe" />
            </FormGroup>
            <FormGroup className="formGroup">
              <FormLabel className="formLabel">Email *</FormLabel>
              <InputBase
                className="formInput"
                placeholder="e.g. john@john.com"
              />
            </FormGroup>
            <FormGroup className="formGroup">
              <FormLabel className="formLabel">Phone *</FormLabel>
              <InputBase
                className="formInput"
                placeholder="e.g. +100 555 1111"
              />
            </FormGroup>
            <FormGroup className="formGroup">
              <FormLabel className="formLabel">Message *</FormLabel>
              <InputBase
                multiline
                rows="5"
                className="formInput"
                placeholder="Write a message.."
              />
            </FormGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

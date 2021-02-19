import React from 'react';
import './ProfileStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar';
import { Avatar } from '@material-ui/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileFirstDiv">
        <h1>Profile Page</h1>
      </div>
      <div className="profileSecondDiv">
        <div className="card">
          <div className="personal">
            <Avatar className="avatar">JD</Avatar>
            <h1>John Doe</h1>
            <span className="location">
              <FontAwesomeIcon className="locationIcon" icon={faMapMarkerAlt} />{' '}
              <h4>New York</h4>
            </span>
          </div>
          <div className="member">
            <h4>Gold Member</h4>
            <h5>2021</h5>
          </div>
        </div>
        <div className="content">
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;

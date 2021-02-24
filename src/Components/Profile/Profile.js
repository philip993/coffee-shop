import React from 'react';
import './ProfileStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar';
import { Avatar, Card, CardContent } from '@material-ui/core';
import { faMapMarkerAlt, faSort } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
          <div className="contentMenu">
            <Link className="contentMenuOption">One</Link>
            <Link className="contentMenuOption">Two</Link>
          </div>
          <div className="contentSort">
            <span className="sort">
              <h4>Sort</h4>
              <FontAwesomeIcon className="sortIcon" icon={faSort} />
            </span>
          </div>
          <div className="contentMain">
            <h1>Content</h1>
            {/* <div className="orderDiv">
              <Card className="order">
                <CardContent className="orderHeader">
                  <tr className="tableDate">
                    <td className="tableOrderDate">10.01.2021</td>
                  </tr>
                  <tr className="tableOrderNo">
                    <td>Order:</td>
                    <td className="tableOrderNumber">#0001</td>
                  </tr>
                </CardContent>
                <CardContent className="orderBody">
                  <tr>
                    <td></td>
                  </tr>
                  <tr className="tableOrderBody">
                    <td>Espresso</td>
                    <td>x</td>
                    <td>1</td>
                  </tr>
                  <tr className="tableOrderBody">
                    <td>Cafe</td>
                    <td>x</td>
                    <td>10</td>
                  </tr>
                </CardContent>
                <CardContent className="orderFooter">
                  <tr className="tableOrderFooter">
                    <td className="tableOrderTotal">Total:</td>
                    <td className="tableOrderSum"> $ 100.00</td>
                  </tr>
                </CardContent>
              </Card>
            </div> */}
            <div className="profileDiv">
              <Card className="personal">
                <CardContent>
                  <span className="personalHeader">
                    <h4>Personal</h4>
                  </span>

                  <span>
                    <h4 className="field">Full Name</h4>
                    <h4 className="info">John Doe</h4>
                  </span>
                  <span>
                    <h4 className="field">Date of Birth</h4>
                    <h4 className="info">01.01.1990</h4>
                  </span>
                  <span>
                    <h4 className="field">Address</h4>
                    <h4 className="info">Pearl Side 4</h4>
                  </span>
                  <span>
                    <h4 className="field">Address 2</h4>
                    <h4 className="info">New York, US</h4>
                  </span>
                </CardContent>
                <CardContent>
                  <span className="personalHeader">
                    {' '}
                    <h4>Contact</h4>
                  </span>

                  <span>
                    <h4>Phone</h4>
                    <h4 className="info">+100 0100 4224</h4>
                  </span>
                  <span>
                    <h4>e-mail</h4>
                    <h4 className="info">johndoe@info.com</h4>
                  </span>
                </CardContent>
                <CardContent>
                  <span className="personalHeader">
                    <h4>Payment Details</h4>
                  </span>

                  <span>
                    <h4>Card</h4>
                    <h4 className="info">**** **** **** 5445</h4>
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

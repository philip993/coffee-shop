import React from 'react';
import './HomepageStyle.scss';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '../../img/coffee2.png';
import OrderIcon from '../../img/order.png';
import ProfileIcon from '../../img/user.png';
import ContactUs from '../../img/c2.png';
import CoffeeBeans from '../../img/beans3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRegisterForm, setLoginForm } from '../Main/MainActons';

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRegisterView = () => {
    dispatch(setRegisterForm());
    history.push('/register');
  };

  const handleLoginView = () => {
    dispatch(setLoginForm());
    history.push('/register');
  };

  return (
    <div className="homepage">
      <div className="homepageFirstDiv">
        <div className="homepageButtonContainer">
          <Button className="signInButton" onClick={handleLoginView}>
            Sign In
          </Button>
          <Button className="signUpButton" onClick={handleRegisterView}>
            Sign Up
          </Button>
        </div>

        <h1>Coffee Shop</h1>
        <h2>Don't wait in line, make your order now!</h2>
      </div>
      <div className="homepageSecondDiv">
        <div className="linkContainer">
          <img className="icons" src={MenuIcon} alt="menu" />
          <p>Choose your Coffee from our Menu. </p>
          <Link to="/menu" className="link">
            Check Menu <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </div>
        <div className="linkContainer">
          <img className="icons" src={OrderIcon} alt="order" />
          <p>View your current and previous Orders.</p>
          <Link to="/cart" className="link">
            Show Orders <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </div>
        <div className="linkContainer">
          <img className="icons" src={ProfileIcon} alt="profile" />
          <p>Your personal information at one place.</p>
          <Link to="/profile" className="link">
            View Profile <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </div>
        <div className="linkContainer"></div>
      </div>
      <div className="homepageSixthDiv">
        <span>
          <p>
            For our Customers, we choose only the finest selection of Coffee
            Beans.
          </p>
          <Link to="/selection" className="link">
            View selection <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </span>
        <img className="beansImage" src={CoffeeBeans} alt="beans" />
      </div>
      <div className="homepageFifthDiv">
        <img className="contactImage" src={ContactUs} alt="contact us" />
        <span>
          <p>
            Having some more question about Us? Feel free to contact us on link
            bellow.
          </p>
          <Link to="contact" className="link">
            Contact Us <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Homepage;

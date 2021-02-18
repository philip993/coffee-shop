import React from 'react';
import './MenuStyle.scss';
import { Card, CardContent, Button } from '@material-ui/core';
import EspressoImg from '../../img/espresso.jpg';
import BeanStar from '../../img/bean-stars.svg';
import WaterStar from '../../img/water-stars.svg';
import CupStar from '../../img/cup-stars.svg';
import Navbar from '../Navbar/Navbar';

const Menu = () => {
  return (
    <div className="menuDiv">
      <Navbar />
      <div className="menuFirstDiv">
        <h1>Coffe Shop Menu</h1>
      </div>
      <div className="menuSecondDiv">
        <Card className="card">
          <CardContent className="cardHeader">
            <h4>Espresso</h4>
            <h4 className="price">$ 2.00</h4>
          </CardContent>
          <img className="cardMedia" src={EspressoImg} alt="espresso" />
          <CardContent className="cardContent">
            <span className="detailSpan">
              <p>Coffee Details</p>
            </span>
            <span className="starSpan">
              <p>Intensity</p>
              <img className="beanStar" src={BeanStar} alt="star" />{' '}
              <img className="beanStar" src={BeanStar} alt="star" />
            </span>
            <span className="starSpan">
              <p>Water</p>
              <img className="beanStar" src={WaterStar} alt="star" />{' '}
            </span>
            <span className="starSpan">
              <p>Size</p>
              <img className="beanStar" src={CupStar} alt="star" />{' '}
            </span>
          </CardContent>
          <CardContent className="cardFooter">
            <Button className="btnPlus">ADD</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Menu;

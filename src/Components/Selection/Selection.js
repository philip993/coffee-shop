import React from 'react';
import './SelectionStyle.scss';
import Navbar from '../Navbar/Navbar';
import { Card, CardContent, Button } from '@material-ui/core';
import ArabicaImg from '../../img/arabica.jpg';

const Selection = () => {
  return (
    <div className="selection">
      <Navbar />
      <div className="selectionFirstDiv">
        <h1>Coffee Beans Selection</h1>
      </div>
      <div className="selectionSecondDiv">
        <Card className="card">
          <CardContent className="cardImg">
            <img className="cardMedia" src={ArabicaImg} alt="espresso" />
          </CardContent>
          <CardContent className="cardHeader">
            <h4>Arabica</h4>
          </CardContent>
          <CardContent className="cardContent">
            <span className="originSpan">
              <p>Origin</p>
              <p>
                Arabica coffee is a type of coffee made from the beans of the
                Coffea arabica plant. Arabica originated in the southwestern
                highlands of Ethiopia and is the most popular kind of coffee
                worldwide – making up 60% or more of coffee production in the
                world.
              </p>
            </span>
            <span className="tasteSpan">
              <p>Taste</p>
              <p>
                High quality arabica coffee should have a slightly sweet flavor,
                with hints of chocolate, nuts, and caramel. You may also notice
                hints for fruit and berries. There will be a slight/pleasant
                acidity, and a little bitterness.
              </p>
            </span>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent className="cardImg">
            <img className="cardMedia" src={ArabicaImg} alt="espresso" />
          </CardContent>
          <CardContent className="cardHeader">
            <h4>Arabica</h4>
          </CardContent>
          <CardContent className="cardContent">
            <span className="originSpan">
              <p>Origin</p>
              <p>
                Arabica coffee is a type of coffee made from the beans of the
                Coffea arabica plant. Arabica originated in the southwestern
                highlands of Ethiopia and is the most popular kind of coffee
                worldwide – making up 60% or more of coffee production in the
                world. Arabica coffee is a type of coffee made from the beans of
                the Coffea arabica plant. Arabica originated in the southwestern
                highlands of Ethiopia and is the most popular kind of coffee
                worldwide – making up 60% or more of coffee production in the
                world.
              </p>
            </span>
            <span className="tasteSpan">
              <p>Taste</p>
              <p>
                High quality arabica coffee should have a slightly sweet flavor,
                with hints of chocolate, nuts, and caramel. You may also notice
                hints for fruit and berries. There will be a slight/pleasant
                acidity, and a little bitterness.
              </p>
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Selection;

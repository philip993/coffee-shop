import React from 'react';
import './MenuStyle.scss';
import { Card, CardContent, Select, MenuItem, Button } from '@material-ui/core';
import EspressoImg from '../../img/espresso.jpg';

const Menu = () => {
  return (
    <div className="menuDiv">
      <div className="menuFirstDiv">
        <h1>Menu</h1>
      </div>
      <div className="menuSecondDiv">
        <Card className="card">
          <h4 className="cardHeader">Espresso</h4>
          <img className="cardMedia" src={EspressoImg} alt="espresso" />
          <CardContent className="cardContent">
            Beans{' '}
            <Select>
              <MenuItem>Arabica</MenuItem>
              <MenuItem>Robusta</MenuItem>
            </Select>
            Sugar{' '}
            <Select>
              <MenuItem>No sugar</MenuItem>
              <MenuItem>1/2 tbps</MenuItem>
              <MenuItem>1 tbps</MenuItem>
              <MenuItem>1 1/2 tbps</MenuItem>
              <MenuItem>2 tbps</MenuItem>
            </Select>
          </CardContent>
          <CardContent className="cardFooter">
            <Button>- 1</Button>
            <Button>+ 1</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Menu;

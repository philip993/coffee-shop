import React from 'react';
import Homepage from '../Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './AppStyle.scss';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import Selection from '../Selection/Selection';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/selection" component={Selection} />
        <Route exact path="/register" component={Main} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

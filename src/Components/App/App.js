import React from 'react';
import Homepage from '../Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './AppStyle.scss';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

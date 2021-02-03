import React from 'react';
import Homepage from '../Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './AppStyle.scss';
import Menu from '../Menu/Menu';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </div>
  );
};

export default App;

import React from 'react';
import Homepage from '../Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './AppStyle.scss';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;

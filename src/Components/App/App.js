import React from 'react';
import Homepage from '../Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

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

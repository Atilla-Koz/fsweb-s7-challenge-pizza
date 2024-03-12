import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Order from './components/Order';
import Success from './components/Success';
import AdvMain from './components/AdvMain';

function App() {
  return (
    <>
      <Switch>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/">
          <AdvMain />
        </Route>
      </Switch>
    </>
  );
}

export default App;

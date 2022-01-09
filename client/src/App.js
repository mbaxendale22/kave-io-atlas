import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main.js';
import Login from './components/Login.js';
import Slider from './components/Slider.js';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

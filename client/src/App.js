import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main.js';
import Slider from './components/Slider.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main.js";
import Slider from "./components/Slider.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login";
import CoffeeJournal from "./components/coffeeJournal/CoffeeJournal.js";
import CoffeeShow from "./components/coffeeJournal/CoffeeShow.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/slider" component={Slider} />
        <Route exact path="/journal/:id" component={CoffeeShow} />
        <Route exact path="/journal" component={CoffeeJournal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

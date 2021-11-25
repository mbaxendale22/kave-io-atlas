import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage.js'
import Login from './components/Login.js'

const App = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ='/' component={LandingPage}/>
      <Route exact path ='/login' component={Login}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './pages/Header/Header';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import DonateInKind from './pages/Donate/DonateInKind';
import Volunteer from './pages/Volunteer/Volunteer';
import Organization from './pages/Organization/Organization';
import User from './pages/User/User';

class App extends Component {

  render() {
    return (
      <div className="shinystars-app">
                <Header />
        <Router>

          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/donateinkind" component={DonateInKind} />
            <Route exact path="/organization" component={Organization} />
            <Route exact path="/user" component={User} />
          </Switch>
        </Router>
      </div>


    );
  }
}

export default App;

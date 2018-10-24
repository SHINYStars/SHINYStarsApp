import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from  './pages/Login/Login';
import Contact from  './pages/Contact/Contact';
import DonateMoney from  './pages/Donate/DonateMoney';
import DonateInKind from  './pages/Donate/DonateInKind';
import Volunteer from './pages/Volunteer/Volunteer';
import Organization from './pages/Organization/Organization';
import User from './pages/User/User';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/donatemoney" component={DonateMoney} />
          <Route exact path="/donateinkind" component={DonateInKind} />
          <Route exact path="/organization" component={Organization} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </Router>
     
        );
      }
    }
    
    export default App;

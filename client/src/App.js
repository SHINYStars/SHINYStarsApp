import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './pages/Header/Header';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import DonateInKind from './pages/Donate/DonateInKind';
import Volunteer from './pages/Volunteer/Volunteer';
import Organization from './pages/Organization/Organization';
import User from './pages/User/User';
import API from './util/API';
import { request } from 'https';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    if (!this.state.user) {
      this.getUser();
    }
  }

  updateUser (userObject) {
    console.log('userObj', userObject);
    this.setState(userObject);
  }

  getUser() {
    console.log(request);
    API.getUser().then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <div className="shinystars-app">
                <Header user={this.state.user}/>
        <Router>

          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => <Login handleLogin={this.updateUser} user={this.state.user} />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/donateinkind" component={DonateInKind} />
            <Route exact path="/organization/:user" component={Organization} />
            <Route exact path="/signup/:org" component={User} />
          </Switch>
        </Router>
      </div>


    );
  }
}

export default App;

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
import API from './util/API';
import { request } from 'https';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
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
          email: response.data.user.email
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  render() {
    return (
      <div className="shinystars-app">
                <Header email={this.state.email}/>
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

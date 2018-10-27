import React, { Component } from "react";

import { Col, CardPanel, Input, Button, Icon, Row } from "react-materialize";

class Volunteer extends Component {
  render() {
    return (
      <Row id="volunteer">
        <form>
          <Col s={12} m={6} l={6} xl={6} offset="l3 xl3 m3">
           <CardPanel className="grey lighten-2 black-text">
               <h4>Register to Volunteer</h4>
               <Input s={12} label="Username" />
               <Input type="password" label="password" s={12} />
               <Input name='group1' type='checkbox' value='rememberMe' label='Remember me' className='filled-in' s={12} />
               <Button className="grey lighten-2 black-text" waves='light'>Submit<Icon right>thumb_up</Icon></Button>
             </CardPanel>
           </Col>

      {/* -=-=-=-=-=-===-==-=-=-=-=-=-=-===-=-=-=-=-=== */}

         </form>
        <div id="login-page" className="row">
          <div className="col s12 l6 offset-l3 z-depth-4 card-panel">
            <form className="login-form">
              <div className="row">
                <div className="input-field col s12 center">
                  <img
                    src="images/login-logo.png"
                    alt=""
                    className="circle responsive-img valign profile-image-login"
                  />
                  <p className="center login-form-text">
                    Material Design Admin Template
                  </p>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="mdi-social-person-outline prefix" />
                  <input id="username" type="text" />
                  <label for="username">Username</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="mdi-action-lock-outline prefix" />
                  <input id="password" type="password" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m12 l12  login-text">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <a
                    href="index.html"
                    className="btn waves-effect waves-light col s12"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m6 l6">
                  <p className="margin medium-small">
                    <a href="page-register.html">Register Now!</a>
                  </p>
                </div>
                <div className="input-field col s6 m6 l6">
                  <p className="margin right-align medium-small">
                    <a href="page-forgot-password.html">Forgot password ?</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Row>
    );
  }
}

export default Volunteer;

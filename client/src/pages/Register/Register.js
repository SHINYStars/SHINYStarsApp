import React, { Component } from "react";
/* import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'; */
import axios from "axios";
import Login from "../Login/Login";
import { Col, CardPanel } from "react-materialize";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }
  handleClick(event, role) {
    var apiBaseUrl = "http://localhost:3000/api/";
    // console.log("values in register handler",role);
    var self = this;

    if (
      this.state.first_name.length > 0 &&
      this.state.last_name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      var payload = {
        first_name: this.state.firsName,
        last_name: this.state.lastName,
        userid: this.state.email,
        password: this.state.password,
        role: role
      };
      axios
        .post(apiBaseUrl + "/register", payload)
        .then(function(response) {
          console.log(response);
          if (response.data.code === 200) {
            //  console.log("registration successfull");
            var loginscreen = [];
            loginscreen.push(
              <Login
                parentContext={this}
                appContext={self.props.appContext}
                role={role}
              />
            );
            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
              loginscreen: loginscreen,
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true
            });
          } else {
            console.log("some error ocurred", response.data.code);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert("Input field value is missing");
    }
  }
  render() {
    // console.log("props",this.props);
    // var userhintText, userLabel;
    // if (this.props.role === "user") {
    //   (userhintText = "user id"), (userLabel = "User Id");
    // } else {
    //   (userhintText = "Organization"), (userLabel = "ORG Id");
    // }
    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <span>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </CardPanel>
        </Col>

        {/* <MuiThemeProvider>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
           <TextField
             hintText={userhintText}
             floatingLabelText={userLabel}
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
         </MuiThemeProvider> */}
      </div>
    );
  }
}

export default Register;

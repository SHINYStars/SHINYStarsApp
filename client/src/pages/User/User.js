import React, { Component } from 'react';
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Col, CardPanel, Input, Button } from 'react-materialize';

class User extends Component {

  state = {
    isLoading: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber1: "",
    phonenumber2: "",
    organization: (this.props.match.params.org === 1) ? 1 : 0,
    confirmUserSignup: false,
    error: false
  };


  componentDidMount() {
    this.setOrgflag();
  }

  validateForm() {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  confirmRegistration = () => {
    this.setState({
      confirmUserSignup: true
    })
  }

  setOrgflag = () => {
    this.setState({
      organization: this.props.match.params.org
    });

  }

  confirmError = () => {
    this.setState({
      error: true
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.validateForm()) {
      const orgParam = this.state.organization;
      API.user({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phonenumber1: this.state.phonenumber1,
        phonenumber2: this.state.phonenumber2,
        organization: this.state.organization

      })
        .then(res => {
          if (res.data.error) {
            console.error(res.data.error);
            this.confirmError();
          }
          if (orgParam === "1") {
            window.location.href = "/organization/" + res.data._id;
          } else {
            console.log(res.data);
            this.confirmRegistration();
          }
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    console.log(this.props.match.params.org);
    console.log(this.state.organization);


    return (

      <div className="container" id="user">

        <form>
          <Col s={12} m={5}>
            <CardPanel>
              <h4>Signup</h4>

              <Input placeholder="First Name" s={6} label="First Name"
                type="text" name="firstName"
                defaultValue={this.state.firstName}
                onChange={this.handleChange} />

              <Input placeholder="Last Name" s={6} label="Last Name"
                type="text" name="lastName"
                defaultValue={this.state.password}
                onChange={this.handleChange}
              />

              <Input placeholder="Email" s={12} label="Email"
                type="text" name="email"
                defaultValue={this.state.email}
                onChange={this.handleChange}
              />

              <Input placeholder="Password" s={6} label="Password"
                type="password" name="password"
                defaultValue={this.state.password}
                onChange={this.handleChange}
              />
              <Input placeholder="Confirm Password" s={6} label="Confirm Password"
                type="password" name="confirmPassword"
                defaultValue={this.state.confirmPassword}
                onChange={this.handleChange}
              />

              <Input placeholder="Phone Number" s={6} label="Phone Number "
                type="text" name="phonenumber1"
                defaultValue={this.state.phonenumber1}
                onChange={this.handleChange}
              />
              <Input placeholder="Mobile Number" s={6} label="Mobile Number "
                type="text" name="phonenumber2"
                defaultValue={this.state.phonenumber2}
                onChange={this.handleChange} />

              <Button
                disabled={!this.validateForm()}
                onClick={this.handleFormSubmit}>
                Register User</Button>
              <a href="/login">Login</a>

              <SweetAlert
                show={this.state.confirmUserSignup}
                type='success'
                title='Registration Complete!'
                text='Thanks for Registering!'
                onConfirm={() => {
                  this.setState({
                    confirmUserSignup: false
                  }); window.location.href = "/login";
                }}
              />
              <SweetAlert
                show={this.state.error}
                type='error'
                title='Error'
                text='Already registered with this email!'
                onConfirm={() => {
                  this.setState({
                    error: false
                  }); window.location.href = "/login";
                }}
              />
            </CardPanel>
          </Col>
        </form>
      </div>
    );
  }

}

export default User;
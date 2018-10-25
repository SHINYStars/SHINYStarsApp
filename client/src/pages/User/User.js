import React, { Component } from 'react';
import API from "../../util/API";
import { Row, Input, Button } from 'react-materialize';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phonenumber1: "",
      phonenumber2: "",
      organization: 0
    };
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


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstName);

    if (this.state.firstName && this.state.lastName) {
      console.log(this.state.firstName);

      API.user({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phonenumber1: this.state.phonenumber1,
        phonenumber2: this.state.phonenumber2,
        organization: this.state.organization

      })
        .then(res => this.user())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (

      <div className="container">
      <Row>
          <div className="section">
            <form className="col s12 ">
              <Row>
                <Input placeholder="First Name" s={6} label="First Name"
                  type="string" name="firstName"
                  defaultValue={this.state.firstName}
                  onChange={this.handleChange} ></Input>

                <Input placeholder="Last Name" s={6} label="Last Name"
                  type="string" name="lastName"
                  defaultValue={this.state.password}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Input placeholder="Email" s={12} label="Email"
                  type="string" name="email"
                  defaultValue={this.state.email}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Input placeholder="Password" s={6} label="Password"
                  type="string" name="password"
                  defaultValue={this.state.password}
                  onChange={this.handleChange}
                />
                <Input placeholder="Confirm Password" s={6} label="Confirm Password"
                  type="string" name="confirmPassword"
                  defaultValue={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </Row>
              <Row>
                <Input placeholder="Phone Number" s={6} label="Phone Number "
                  type="string" name="phonenumber1"
                  defaultValue={this.state.phonenumber1}
                  onChange={this.handleChange}
                />
                <Input placeholder="Mobile Number" s={6} label="Mobile Number "
                  type="string" name="phonenumber2"
                  defaultValue={this.state.phonenumber2}
                  onChange={this.handleChange} />
              </Row>
              <Row>
                <Button
                  // disabled={!this.validateForm()}
                  onClick={this.handleFormSubmit}>
                  Submit
              </Button>
              </Row>
            </form>
        </div>
      </Row>
      </div>
    );
  }

}

export default User;
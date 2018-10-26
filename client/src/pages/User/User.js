import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form";
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class User extends Component {

    state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phonenumber1: "",
      phonenumber2: "",
      organization: 0,
      confirmSignup: false
    };
  

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

  user = () => {
    this.setState({
        confirmSignUp: true
    })
}


  handleFormSubmit = event => {
    event.preventDefault();
    
    if (this.validateForm()) {
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

      <div className="container" id="user">
            <form>
                <Input placeholder="First Name" s={6} label="First Name"
                  type="string" name="firstName"
                  defaultValue={this.state.firstName}
                  onChange={this.handleChange} 
                />
                <Input placeholder="Last Name" s={6} label="Last Name"
                  type="string" name="lastName"
                  defaultValue={this.state.password}
                  onChange={this.handleChange}
                />
              
                <Input placeholder="Email" s={12} label="Email"
                  type="string" name="email"
                  defaultValue={this.state.email}
                  onChange={this.handleChange}
                />
              
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
              
                <Input placeholder="Phone Number" s={6} label="Phone Number "
                  type="string" name="phonenumber1"
                  defaultValue={this.state.phonenumber1}
                  onChange={this.handleChange}
                />
                <Input placeholder="Mobile Number" s={6} label="Mobile Number "
                  type="string" name="phonenumber2"
                  defaultValue={this.state.phonenumber2}
                  onChange={this.handleChange} />
              
                <FormBtn
                  disabled={!this.validateForm()}
                  onClick={this.handleFormSubmit}>
                  Register User
              </FormBtn>
              <SweetAlert
                show = {this.state.confirmSignup}
                type = 'success'
                title = 'Registration Complete!'
                text = 'Thanks for Registering!'
                onConfirm = {() => this.setState({
                  confirmSignup: false
                })}
                />

            </form>
      </div>
    );
  }

}

export default User;
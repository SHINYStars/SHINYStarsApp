import React, { Component } from 'react';
import API from "../../util/API";
import { Col,CardPanel, Input, Button } from 'react-materialize';

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
      organization: (this.props.match.params.org)?1:0
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

  user = () => {
    this.setState({
        confirmSignUp: true
    })
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
        .then(res => {
          this.user();
          if(this.props.match.params.org){
            console.log(this.props.match.params.org);
            window.location.href="/organization/"+res.data._id;
        }
        })
        .catch(err => console.log(err));
    }
  };
  render() {
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
                type="text" name="password"
                defaultValue={this.state.password}
                onChange={this.handleChange}
              />
              <Input placeholder="Confirm Password" s={6} label="Confirm Password"
                type="text" name="confirmPassword"
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
                Submit
              </Button>
            </CardPanel>
          </Col>
        </form>
      </div>
    );
  }

}

export default User;
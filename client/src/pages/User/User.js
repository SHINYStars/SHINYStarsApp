import React, { Component } from 'react';
import API from "../../util/API";

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
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
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
        <form onSubmit={this.handleSubmit}>
          <input name="firstName" placeholder="Enter your First Name"
                 type="string"
                 defaultValue={this.state.firstName}
                 onChange={this.handleChange}
                 />
          <input name="lastName" placeholder="Enter your Last Name" 
                 type="string"
                 defaultValue={this.state.password}
                 onChange={this.handleChange}
                 />
          <input name="email" placeholder="Enter your email"
                 type="string"
                 defaultValue={this.state.email}
                 onChange={this.handleChange}
                 />
          <input name="password" placeholder="Enter your password" 
                 type="string"
                 defaultValue={this.state.password}
                 onChange={this.handleChange}
                 />
          <input name="confirmPassword" placeholder="Re-nter your password"
                 type="string"
                 defaultValue={this.state.confirmPassword}
                 onChange={this.handleChange}
                 />
          <input name="phonenumber1" placeholder="Enter your phone number"
                 type="string"
                 defaultValue={this.state.phonenumber1}
                 onChange={this.handleChange}
                 />
          <input name="phonenumber2" placeholder="Enter additional phone number"
                 type="string"
                 defaultValue={this.state.phonenumber2}
                 onChange={this.handleChange} />

         

          <button
                // disabled={!this.validateForm()}
                onClick={this.handleFormSubmit}

              >
                Submit
              </button>

        </form>
      </div>
    );
  }
  
}

export default User;
import React, { Component } from 'react';
import { Input } from "../../components/Form";
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Col, CardPanel, Button } from 'react-materialize';

class UserEdit extends Component {

    state = {
        isLoading: false,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phonenumber1: "",
        phonenumber2: "",
        organization: (this.props.match.params.org === 1) ? 1 : 0,
        confirmUpdate: false,
        error: false
      };

      componentDidMount() {
          if (this.props.user) {
              API.getUser(this.props.user)
                .then(res => this.userInfo(res))
                .catch(err => console.log(err));
          }
      }

      userInfo = (res) => {
          const user = res.data;
          this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phonenumber1: user.phonenumber1,
          phonenumber2: user.phonenumber2
        });

      }

      confirmUpdate = () => {
          this.setState({
              confirmUpdate: true
          })
      }


      handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
              [name]: value
          });
      };

      validateForm() {
        return (
          this.state.firstName &&
          this.state.lastName &&
          this.state.email &&
          this.state.phonenumber1

        );
      }

      

      handleFormSubmit = event => {
          event.preventDefault();
          const { firstName, lastName, email, phonenumber1, phonenumber2 } = this.state;
          
          API.updateUser({
              firstName,
              lastName,
              email,
              phonenumber1,
              phonenumber2
          })

          .then(res => this.confirmUpdate())
          .catch(err => console.log(err));
          
      
};

render() {
    console.log(this.props.match.params.org);
    console.log(this.state.organization);


    return (

      <div className="container" id="user">

        <form>
          <Col s={12} m={5}>
            <CardPanel>
              <h4>Edit User Information</h4>

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
                Update User</Button>
              <a href="/user">Cancel</a>

              <SweetAlert
                show={this.state.confirmUserSignup}
                type='success'
                title='User Information Updated!'
                text='Your user information has been updated!'
                onConfirm={() => {
                  this.setState({
                    confirmUserSignup: false
                  }); window.location.href = "/user/edit/user";
                }}
              />
              
            </CardPanel>
          </Col>
        </form>
      </div>
    );
  }

}

export default UserEdit;
import React, { Component } from "react";
import API from "../../util/API";
import { Col, CardPanel, Input, Button, Icon, Row } from "react-materialize";

class Volunteer extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    API.volunteerSignup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    }).then(res => {
      console.log("Saved");
    })
  }

  render() {
    return (
      <Row id="volunteer">
        <form>
          <Col s={12} m={6} l={6} xl={6} offset="l3 xl3 m3">
           <CardPanel className="grey lighten-2 black-text">
               <h4>Register to Volunteer</h4>
               <Input 
                  s={12} 
                  defaultValue={this.state.firstName} 
                  label="First Name" name="firstName" 
                  onChange={this.handleChange} 
                  style={{marginTop:"2%"}} 
                  />
               <Input 
                  s={12} 
                  defaultValue={this.state.lastName} 
                  label="Last Name" name="lastName"
                  onChange={this.handleChange} 
                  style={{marginTop:"2%"}} />
               <Input 
                  defaultValue={this.state.email} 
                  name="email" 
                  type="email" 
                  label="Email"
                  onChange={this.handleChange} 
                  s={12} 
                  style={{marginTop:"2%"}} />
               <Button 
                  className="grey lighten-2 black-text" 
                  waves='light' 
                  style={{marginTop:"2%"}} 
                  onClick={this.handleSubmit}>
               Submit<Icon right>thumb_up</Icon></Button>
             </CardPanel>
           </Col>
         </form>
      </Row>
    );
  }
}

export default Volunteer;
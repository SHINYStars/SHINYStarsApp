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
               <Input s={12} label="First Name" name="firstName" style={{marginTop:"2%"}} />
               <Input s={12} label="Last Name" name="lastName" style={{marginTop:"2%"}} />
               <Input type="email" label="Email" s={12} style={{marginTop:"2%"}} />
               <Button className="grey lighten-2 black-text" waves='light' style={{marginTop:"2%"}} >Submit<Icon right>thumb_up</Icon></Button>
             </CardPanel>
           </Col>
         </form>
      </Row>
    );
  }
}

export default Volunteer;
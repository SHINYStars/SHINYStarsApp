import React, { Component } from "react";

import { Col, CardPanel, Input, Button, Icon } from "react-materialize";


class Volunteer extends Component {
  render() {
    return (

      <div className="container" id="volunteer">
        <form>
          <Col s={12} m={5}>
            <CardPanel className="grey lighten-2 black-text">
              <h4>Register to Volunteer</h4>
              <Input s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input s={6} label="Charity Name" />
              <Input type="email" label="Email" s={12} />
              <Button className="grey lighten-2 black-text" waves='light'>Submit<Icon right>thumb_up</Icon></Button>
            </CardPanel>
          </Col>
        </form>
      </div>
    );
  }
}
          
          export default Volunteer;

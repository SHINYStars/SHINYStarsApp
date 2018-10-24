import React, { Component } from "react";
import { Col, CardPanel, Row, Input } from "react-materialize";

class Volunteer extends Component {
  render() {
    return (
      <div className="container" id="volunteer">
        <form>
          <Col s={12} m={5}>
            <CardPanel className="lighten-4 black-text">
              <Input s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input type="password" label="password" s={12} />
              <Input type="email" label="Email" s={12} />
            </CardPanel>
          </Col>
        </form>
      </div>
    );
  }
}

export default Volunteer;

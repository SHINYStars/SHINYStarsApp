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
               <Input s={12} label="Username" name="username"/>
               <Input type="password" label="Password" s={12} />
               <Input name='group1' type='checkbox' value='rememberMe' label='Remember me' className='filled-in'  s={12} />
               <Button style={{marginTop:"2%"}} className="grey lighten-2 black-text" waves='light'>Submit<Icon right>thumb_up</Icon></Button>
             </CardPanel>
           </Col>
         </form>
      </Row>
    );
  }
}

export default Volunteer;

import React, { Component } from 'react';
import {Button,Icon} from 'react-materialize';

class Volunteer extends Component {
    render() {
      return (
        <div className="container" id="volunteer">
        <form>
        <Button waves="light">
          <Icon>thumb_up</Icon>
        </Button>
        </form>
      </div>
        );
    }
  }
  
  export default Volunteer;
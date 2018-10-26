import React, { Component } from 'react';
import { Button ,CardPanel,Col} from 'react-materialize';
import './Home.css';

class Home extends Component {

    handleNPOLogin(event) {
        event.preventDefault()
        console.log('handleNPOLogin')
        window.location.href="/signup/1";
    }

    handleLogin(event) {
        event.preventDefault();
        console.log('handleSubmit');

        window.location.href="/signup";
    }

    render() {
        return (
            <div className="container" id="login">

                <Col s={12} m={5}>
                    <CardPanel>
                        <Button onClick={this.handleLogin}>Signup</Button>
                        <Button onClick={this.handleNPOLogin}>NPO Signup</Button>
                    </CardPanel>
                </Col>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { CardPanel, Col, Input, Button } from 'react-materialize';
import API from "../../util/API";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit', event);

        API.login({
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    
                    // update the state to redirect to home
                    this.props.handleLogin({
                        user: response.data.user
                    });
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.props.user) {
            console.log("user"+this.props.user);
            return <Redirect to="/" />
        }
            return (
                <div className="container" id="login">
                    <form onSubmit={this.handleSubmit}>
                        <Col s={12} m={5}>
                            <CardPanel>
                                <h4>Login</h4>
                                <Input s={6} 
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                                <Input s={6} 
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                                <Button type="submit">Login</Button>
                                <a href="/signup/0">Signup</a>&nbsp;&nbsp;
                                <a href="/signup/1">NPO Signup</a>

                            </CardPanel>
                        </Col>
                    </form>
                </div>

            )
        }
}

export default Login;
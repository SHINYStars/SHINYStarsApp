import React, { Component } from 'react';
import { Button, Card, Col, Input, Preloader, Row, Icon } from 'react-materialize';
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css';
import './Contact.css';

class Contactform extends Component {

    state = {
        email: '',
        subject: '',
        body: '',
        copy: false,
        sendSuccessful: false,
        sendFailure: false,
        emailValid: false,
        isSending: false
    }

    handleChange = (evt) => {
        const {name, value} = evt.target;
        if (name === 'email') {
            const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            this.setState({
                emailValid
            });
        }
        if (name === 'copy') {
            return this.setState({
                copy: !this.state.copy
            });
        }
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="contact-form">
                <form>
                    <button>Send Message</button>
                </form>
            </div>
        );
    }
}

export default Contactform;
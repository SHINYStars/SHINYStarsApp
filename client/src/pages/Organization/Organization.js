import React, { Component } from 'react';
import { Input } from "../../components/Form";
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { CardPanel,Button } from 'react-materialize';

class Organization extends Component {
    state = {
        orgName: "",
        website: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        phoneNumber: "",
        email: "",
        confirmSignUp: false
    };

    // componentDidMount() {
    //     this.confirmRegistration();
    // }

    confirmRegistration = () => {
        this.setState({
            confirmSignUp: true
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { orgName, website, address1, address2, city, state, country, zip, phoneNumber, email} = this.state;

        if (orgName &&
            address1 &&
            city &&
            state &&
            country &&
            zip &&
            phoneNumber &&
            email) {
            API.newOrganization({
                orgName: orgName,
                website: website,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                country: country,
                zip: zip,
                phoneNumber: phoneNumber,
                email: email
            })
                .then(res => this.confirmRegistration())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container" id="organization">
                <form>
                <CardPanel>

                <h4>NPO Profile</h4>

                    <Input
                        value={this.state.orgName}
                        onChange={this.handleInputChange}
                        name="orgName"
                        placeholder="Organization Name*" />
                    <Input
                        value={this.state.website}
                        onChange={this.handleInputChange}
                        name="website"
                        placeholder="Website*" />
                    <Input
                        value={this.state.address1}
                        onChange={this.handleInputChange}
                        name="address1"
                        placeholder="Address 1*" />
                    <Input
                        value={this.state.address2}
                        onChange={this.handleInputChange}
                        name="address2"
                        placeholder="Address 2" />
                    <Input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City*" />
                    <Input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State*" />
                    <Input
                        value={this.state.country}
                        onChange={this.handleInputChange}
                        name="country"
                        placeholder="Country*" />
                    <Input
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                        name="zip"
                        placeholder="Zip Code*" />
                    <Input
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                        name="phoneNumber"
                        placeholder="Phone Number*" />
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="E-Mail Address*" />
                        <div>
                    <span><i>*required field</i></span>
                    </div>
                    <Button
                        disabled={!(this.state.orgName &&
                            this.state.website &&
                            this.state.address1 &&
                            this.state.city &&
                            this.state.state &&
                            this.state.country &&
                            this.state.zip &&
                            this.state.phoneNumber &&
                            this.state.email)}
                        onClick={this.handleFormSubmit}>
                        Save</Button>
                    <SweetAlert
                        show = {this.state.confirmSignUp}
                        type = 'success'
                        title = 'Registration Complete!'
                        text = 'Your organization registration is completed. Thank you!'
                        onConfirm = {() => this.setState({
                            confirmSignUp: false
                        })}
                    />
                                    </CardPanel>
                </form>
            </div>
        );
    }
}

export default Organization;
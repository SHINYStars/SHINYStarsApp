import React, { Component } from 'react';
import { Input } from "../../components/Form";
import API from "../../util/API";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { CardPanel, Button } from 'react-materialize';
// import { debug } from 'util';


class OrganizationEdit extends Component {
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
        userId: "",
        needs: [],
        confirmUpdate: false

    };

    setUserId = () => {
        this.setState({ userId: this.props.match.params.userId });
    }

    componentDidMount() {
        this.setUserId();
        API.getOrganization(this.props.match.params.userId)
            .then(res => {
                console.log(res.data[0]);
                this.populateForm(res.data);
            })
            .catch(err => console.log(err));
    }

    populateForm = (org) => {
        this.setState({
            orgName: org.orgName,
            website: org.website,
            address1: org.address1,
            address2: org.address2,
            city: org.city,
            state: org.state,
            country: org.country,
            zip: org.zip,
            phoneNumber: org.phoneNumber,
            email: org.email,
            needs: org.needs
        });
    }

    confirmUpdate = () => {
        this.setState({
            confirmUpdate: true
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    validateForm() {
        const { orgName, address1, city, state, country, zip, phoneNumber, email, userId } = this.state;
        return (
            orgName &&
            address1 &&
            city &&
            state &&
            country &&
            zip &&
            phoneNumber &&
            email &&
            userId);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { orgName, website, address1, address2, city, state, country, zip, phoneNumber, email, userId } = this.state;
        if (this.validateForm()) {
            API.updateOrganization({
                orgName: orgName,
                website: website,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                country: country,
                zip: zip,
                phoneNumber: phoneNumber,
                email: email,
                userId: userId
            })
                .then(res => this.confirmUpdate())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container" id="organization">
                <form>
                    <CardPanel>
                        <h4>Edit Organization Profile</h4>
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
                            disabled={!(this.validateForm())}
                            onClick={this.handleFormSubmit}>
                            Update Profile</Button>
                        <a href="/">Cancel</a>
                        <SweetAlert
                            show={this.state.confirmUpdate}
                            type='success'
                            title='Profile Updated!'
                            text='Your organization profile has been updated successfully'
                            onConfirm={() => {
                                this.setState({
                                    confirmUpdate: false
                                }); window.location.href = "/organization/edit/org";
                            }}
                        />
                    </CardPanel>
                </form>
            </div>
        );
    }
}

export default OrganizationEdit;
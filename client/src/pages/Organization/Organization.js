import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form";
import API from "../../util/API";

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
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container" id="organization">
                <form>
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
                    <span><i>*required field</i></span>
                    <FormBtn
                        disabled={!(this.state.author &&
                                    this.state.title &&
                                    )}
                        onClick={this.handleFormSubmit}>

                        Register Organization
                    </FormBtn>
                </form>
            </div>
        );
    }
}

export default Organization;
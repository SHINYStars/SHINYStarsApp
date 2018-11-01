import React, { Component } from 'react';
import { CardPanel, Button, Col, Card } from 'react-materialize';
import './Home.css';
import API from '../../util/API';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class Home extends Component {

    state = {
        search: "",
        organizations: [],
        message: "",
        error: false,
        userInfo:null,
        needLink:"orgneeds"
    };

    componentDidMount=()=>{
        this.setUserInfo(this.props.user);
    }

    setUserInfo=(user)=>{
        this.setState({userInfo:user});
        if(user && user.organization){
            this.setState({needLink:"needs"});
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleNeeds = orgId =>{
        //event.preventDefault();
        this.props.history.push('/'+this.state.needLink+"/"+orgId);        
    }

    handleSearch = (event) => {
        event.preventDefault();

        console.log('handleSearch');
        const filters = this.state.search;
        if (filters !== "") {
            API.search({ filters }).then(res => {
                if (!res.data.length) {
                    this.setState({ message: "No NPO's in your location." })
                }
                this.setState({ organizations: res.data });
            })
                .catch(err => console.log(err));
        } else {
            this.setState({ error: true });
        }
    }

    render() {
        return (
            <div id="home">
                <CardPanel>
                    <div className="container">
                        <form className="overlay" id="form1">
                            <Col s={8} className="card input-field">
                                <input type="search" placeholder="City, State or Zip" name="search" required defaultValue={this.state.search} onChange={this.handleChange} />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </Col>
                            <Col s={4} className="center-align">
                                <Button onClick={this.handleSearch}>Search</Button>
                            </Col>
                        </form>
                    </div>
                    <div className="container list-org">
                        {this.state.organizations.length ? (

                            this.state.organizations.map(organization => (
                                <Card key={organization._id} title={organization.orgName}
                                    reveal={<p>{organization.website}</p>}>
                                    <a href="#!" onClick={()=>this.handleNeeds(organization._id)}>See Needs</a>
                                </Card>

                            ))

                        ) : (
                                <h2 className="text-center">{this.state.message}</h2>
                            )}
                    </div>
                </CardPanel>
                <SweetAlert
                    show={this.state.error}
                    type='error'
                    title='Error'
                    text='Please enter valid City,State or zip'
                    onConfirm={() => {
                        this.setState({
                            error: false
                        });
                    }}
                />
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import { CardPanel,Button,Col } from 'react-materialize';
import './Home.css';

class Home extends Component {

    handleSearch(event) {
        event.preventDefault();
        console.log('handleSearch');
    }

    render() {
        return (
            <div className="" id="home">
                <CardPanel>
                    <div className="container">
                        <form className=" hide-on-med-and-down overlay" id="form1">
                            <Col s={8} className="card input-field">
                                <input type="search" placeholder="City, State" id="search" required  />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                                <div id="searchResults"></div>
                            </Col>
                             <Col s={4} className="center-align">
                                <Button onClick={()=>this.handleSearch()}>Search</Button>
                            </Col>
                        </form>
                    </div>
                </CardPanel>
            </div>
        );
    }
}

export default Home;
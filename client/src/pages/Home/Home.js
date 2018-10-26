import React, { Component } from 'react';
import { Button ,Input,Icon,CardPanel} from 'react-materialize';
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

        window.location.href="/signup/0";
    }

    handleSearch(event){
        event.preventDefault();
        console.log('handleSearch');
    }

    render() {
        return (
            <div className="" id="home">
                    <CardPanel>
                        <div className="overlay">
                        <Input type="text" placeholder="City, State"></Input>
                        <Button onClick={this.handleSearch}><Icon>search</Icon></Button>

                        </div>
                        
                    </CardPanel>   
                    <div className="right">
                        <Button onClick={this.handleLogin}>Login / Signup</Button>
                        <Button onClick={this.handleNPOLogin}>NPO Signup</Button>
                        </div>       
            </div>
        );
    }
}

export default Home;
import React from 'react';
import { Navbar, NavItem, Dropdown,Button } from 'react-materialize';
import './Header.css';
import API from '../../util/API';

const Img = <div><img src='../images/shinystars-logo-5.png' alt="logo" width="60" height="60" className="logo-img" /> SHINY Stars </div>;

const logout = () => {
    API.logout();
    window.location.href = "/login";
}

const Header = (props) => {
    const userId = (props.user) ? props.user._id : "";
    console.log(userId);
    return (
        <header>
            <Navbar brand={Img} right>
                {props.user ? (
                        <Dropdown trigger={
                            <a href="#!"><i className="fa fa-user"></i> {props.user.firstName + " " + props.user.lastName}</a>
                        }>
                            <NavItem href="/user/edit">Account</NavItem>
                            <NavItem href="/org/edit">Organization</NavItem>
                            <NavItem divider />
                            <NavItem href={'/shinylist/' + userId}>SHINYList</NavItem>
                            <NavItem href='/logout' onClick={() => logout()}>Logout</NavItem>

                        </Dropdown>
                ) : ""}
                <NavItem href="/contact">Contact</NavItem>
            </Navbar>
        </header>
    );
};

export default Header;
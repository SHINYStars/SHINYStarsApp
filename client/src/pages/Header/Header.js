import React from 'react';
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import './Header.css';

const Img = <div><img src='../images/shinystars-logo-5.png' alt="logo" width="60" height="60" className="logo-img" /> SHINY Stars </div>;
const Header = (props) => (

    <header>
        <Navbar brand={Img} right>
            <Dropdown trigger={
                <a href="#!">{props.email}</a>
            }>
                <NavItem href="/user/edit">Account</NavItem>
                <NavItem href="/org/edit">Organization</NavItem>
                <NavItem divider />
                <NavItem>SHINY List</NavItem>
            </Dropdown>
        </Navbar>
    </header>
);

export default Header;
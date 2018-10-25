import React from 'react';
import { Navbar } from 'react-materialize';
const Img = <div><img src='../images/shinystars-logo-5.png' alt="logo" width="60" height="60" className="logo-img"/> SHINY Stars </div>;
const Header = () => (

    <header>
        <Navbar brand={Img}>
        </Navbar>
    </header>
);

export default Header;
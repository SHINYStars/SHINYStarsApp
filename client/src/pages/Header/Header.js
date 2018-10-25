import React from 'react';
import { Navbar ,NavItem,Icon} from 'react-materialize';
const Img = <div><img src='../images/shinystars-logo-5.png' alt="logo" width="60" height="60" className="logo-img"/> SHINY Stars </div>;
const Header = (props) => (

    <header>
        <Navbar brand={Img} right>
            <NavItem><Icon>account_circle</Icon>{props.email}</NavItem>
        </Navbar>
    </header>
);

export default Header;
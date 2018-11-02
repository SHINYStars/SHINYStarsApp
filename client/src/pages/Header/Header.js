import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import './Header.css';
import API from '../../util/API';

const Img = <div >
<img src='../../images/shinystars-logo-6.png' alt="logo" width="60" height="60" className="logo-img" /><span className="app-name">SHINY Stars</span></div>;

class Header extends Component {

    logout() {
        API.logout().then((res) => {
            window.location.href = "/login";
        });
    }

    render() {
        let userId = "";
        let fullName = "";
        let email = "";
        let isOrg=0;
        if (this.props.user) {
            userId = this.props.user._id;
            fullName = this.props.user.firstName + " " + this.props.user.lastName;
            email = this.props.user.email;
            isOrg=this.props.user.organization;
        }
        return (
            <header className="header-nav">
                {(this.props.user) ? (
                    <SideNav
                        trigger={Img}
                        options={{ closeOnClick: true }}>
                        <SideNavItem userView
                            user={{
                                background: '',
                                image: '',
                                name: fullName,
                                email: email
                            }}
                        />
                        <SideNavItem href="/user/edit">Account</SideNavItem>
                        {isOrg?
                        (<SideNavItem href={"/organization/edit/"+userId}>Organization</SideNavItem>):
                        ""
                        }
                        <SideNavItem divider />
                        <SideNavItem href="/">Home</SideNavItem>
                        <SideNavItem href={'/shinylist/' + userId}>SHINYList</SideNavItem>
                        <SideNavItem href="/volunteer">Volunteer</SideNavItem>
                        <SideNavItem href="#!logout" onClick={() => this.logout()}>Logout</SideNavItem>
                        <SideNavItem href="/contact">Contact</SideNavItem>
                    </SideNav>
                ) : (
                        <SideNav
                            trigger={Img}
                            options={{ closeOnClick: true }}
                        >
                            <SideNavItem href="/">Home</SideNavItem>
                            <SideNavItem href="/login">Login / Signup</SideNavItem>
                            <SideNavItem href="/volunteer">Volunteer</SideNavItem>
                            <SideNavItem href="/contact">Contact</SideNavItem>
                        </SideNav>
                    )
                }


            </header>
        );
    }

};

export default Header;
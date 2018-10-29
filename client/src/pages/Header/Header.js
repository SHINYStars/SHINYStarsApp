import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import './Header.css';
import API from '../../util/API';

const Img = <div ><img src='../images/shinystars-logo-5.png' alt="logo" width="60" height="60" className="logo-img" /> SHINY Stars </div>;

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
        if (this.props.user) {
            userId = this.props.user._id;
            fullName = this.props.user.firstName + " " + this.props.user.lastName;
            email = this.props.user.email;
        }
        return (
            <header>
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
                        <SideNavItem href="/org/edit">Organization</SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem href={'/shinylist/' + userId}>SHINYList</SideNavItem>
                        <SideNavItem href="#!logout" onClick={() => this.logout()}>Logout</SideNavItem>
                        <SideNavItem href="/contact">Contact</SideNavItem>
                    </SideNav>
                ) : (
                        <SideNav
                            trigger={Img}
                            options={{ closeOnClick: true }}
                        >
                            <SideNavItem href="/login">Login / Signup</SideNavItem>
                            <SideNavItem href="/contact">Contact</SideNavItem>
                        </SideNav>
                    )
                }


            </header>
        );
    }

};

export default Header;
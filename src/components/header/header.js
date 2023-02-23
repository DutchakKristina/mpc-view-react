import React from "react";
import './header.css';
import logo from '../../images/logo.svg';

import test_user from '../../images/user_logo.jpg';
import user_arrow from '../../images/white_arrow.svg';
import MenuItem from "./menu-item";


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo_wrapper">
                    <a href="/"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <nav className="menu_wrapper">
                    <MenuItem></MenuItem>
                </nav>
                <div className="user_wrapper">
                    <div className="user_logo">
                        <img src={test_user} alt="user" />
                    </div>
                    <div className="user_information">
                        <div className="user_name_wrap">
                            <h3 className="user_name">John Smith</h3>
                            <span className="name_icon">
                                <img src={user_arrow} alt="arrow down" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mobile_menu">
                    <div className="iconAnime">
                        <span className="bar-1"> </span>
                        <span className="bar-2"> </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
import React from "react";



import './header.css';
import MenuItemsList from "./menu-items-list";
import menuList from "../../constants";
import UserSettings from "./user-settings/user-settings";
import Logo from "./logo";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Logo/>
                <MenuItemsList list = {menuList}/>
                <UserSettings/>
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
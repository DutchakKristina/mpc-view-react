import React from "react";
import './header.css';
import logo from '../../images/logo.svg';
import overview_icon from '../../images/overview.svg';
import projects_icon from '../../images/projects.svg';
import stations_icon from '../../images/stations.svg';
import alarms_icon from '../../images/alarms.svg';
import commands_icon from '../../images/commands.svg';
import users_icon from '../../images/users.svg';
import test_user from '../../images/user_logo.jpg';
import user_arrow from '../../images/white_arrow.svg';

const Header = () => {
    const menuList = [
        {
            title: 'Overview',
            url: '/overview',
            img: overview_icon
        },
        {
            title: 'Projects',
            url: '/projects',
            img: projects_icon
        },
        {
            title: 'Stations',
            url: '/stations',
            img: stations_icon
        },
        {
            title: 'Alarms',
            url: '/alarms',
            img: alarms_icon
        },
        {
            title: 'Commands',
            url: '/commands',
            img: commands_icon
        },
        {
            title: 'Users',
            url: '/users',
            img: users_icon
        }
    ];
    return (
        <header>
            <div className="container">
                <div className="logo_wrapper">
                    <a href="/"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <nav className="menu_wrapper">
                    <ul className="menu_inner">
                        {menuList.map((menuList, index) => (
                            <li key={index}><a href={menuList.url}><img src={menuList.img} alt="item" />{menuList.title}</a> </li>
                        ))}
                    </ul>
                </nav>
                <div className="user_wrapper">
                    <div className="user_logo">
                        <img src={test_user} alt="user" />
                    </div>
                    <div className="user_information">
                        <div className="user_name_wrap">
                            <h3 className="user_name">John Smith</h3>
                            <span className="name_icon">
                              <img src={user_arrow} alt="arrow down"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
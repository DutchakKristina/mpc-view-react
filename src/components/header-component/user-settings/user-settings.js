import React from "react";

import test_user from '../../../images/user_logo.jpg';
import user_arrow from '../../../images/white_arrow.svg';
import user_settings from '../../../images/icon_user_settings.svg';
import user_logout from '../../../images/icon_user_logout.svg';

import './user-settings.css';

const UserSettings = () => {
    return(
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
                <div className="user_settings">
                    <a href="#s" className="user_settings_link">
                        <span className="user_settings_icon">
                            <img src={user_settings} alt="user settings icon"></img>
                        </span>
                        <span className="user_settings_title">Settings</span>
                    </a>
                    <a href="#s" className="user_settings_link">
                        <span className="user_settings_icon">
                            <img src={user_logout} alt="user settings logout"></img>
                        </span>
                        <span className="user_settings_title">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserSettings;
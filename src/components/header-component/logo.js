import React from "react";
import logo from '../../images/logo.svg';


const Logo = () => {
    return (
        <div className="logo_wrapper main_logo">
            <a href="/"><img src={logo} alt="logo" className="logo" /></a>
        </div>
    )
}

export default Logo;
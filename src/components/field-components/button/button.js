import React from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import './button.css';


const styled = { 
    primary: "primary",
    simple : "simple"
}
const Button = ( {children, type = 'primary'} ) => {
    return (
        <button className={classnames("main_button", styled[type])}>{ children }</button>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'simple']),
}

export default Button; 
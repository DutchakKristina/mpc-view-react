import React from "react";
import classnames from "classnames";
import PropTypes, { func } from 'prop-types';
import './button.css';


const styled = { 
    primary: "primary",
    simple : "simple"
}
const Button = ( {children, type = 'primary', handler, preventDefault= true} ) => {
    const buttonClick = (e) => {
        if(preventDefault){
            e.preventDefault();
        }
        handler(e);
    }
    return (
        <button onClick={buttonClick} className={classnames("main_button", styled[type])}>{children}</button>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'simple']),
    handler: PropTypes.func,
    preventDefault: PropTypes.bool
}

export default Button; 
import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import './input.css'
const styled = {
    left : "left",
    top : "top"
}
const Input = ({position = 'top', label, placeholder}) => {
    return(
        <div className={classNames("input_box", styled[position])}>
           
            <label>{label}</label>
            <div className="input_wrap"><input type="text" placeholder={placeholder}/></div>
        </div>
    )
}
Input.propTypes = {
    type: PropTypes.oneOf(['left', 'top']),
}

export default Input;
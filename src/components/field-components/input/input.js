import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import './input.css';

const styled = {
    left: "left",
    top: "top"
}
const Input = ({ position = 'top', label, placeholder, type }) => {
    return (
        <div className={classNames("input_box", styled[position])}>
            <label>{label}</label>
            <div className="input_wrap"><input type={type} placeholder={placeholder} /></div>
        </div>
    )
}
Input.propTypes = {
    position: PropTypes.oneOf(['left', 'top']),
    label : PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired
}

export default Input;
/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import { useState } from "react";

import './select.css';
import selectArrow from '../../../images/arrow_down.svg';


const selectStyle = {
    regular: "regular",
    small: "small",
    large: "large"
}
const labelStyled = {
    top: "top",
    left: "left"
}


const Select = ({ size = 'regular', label, type = 'top', options = [], selectedValue = null }) => {
    return (
        <div className={classNames("select_wrapper", labelStyled[type])}>
            <label>{label}</label>
            <div className={classNames("select", selectStyle[size])}>
                <select>
                    {options.map(({ value, id }) => (
                        <option selected={selectedValue === value} key={id}>{value}</option>
                    ))}
                </select>
                <img src={selectArrow} alt="arrow" className="select_arrow" />
            </div>
        </div>
    )
}
Select.propTypes = {
    type: PropTypes.oneOf(['top', 'left', 'small', 'regular', 'large']),
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}
export default Select;
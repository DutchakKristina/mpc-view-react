/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { useState } from "react";

import './select.css';
import selectArrow from '../../../images/arrow_down.svg';


const styled = {
    labelTop: "labelTop",
    labelLeft : "labelLeft",
    regular : "regular",
    small : "small",
    large : "large"
}

const optionsArr = ['All', 'Test1', 'Test2'];

const Select = ({size = 'regular', label, type = 'labelTop'}) => {
   const[options, setOptions] = useState(optionsArr);
  
    return(
        <div className = {classNames("select_wrapper", styled[type])}>
                <label>{label}</label>
            <div className={classNames("select", styled[size])}>
                <select>
                    {options.map((option, index ) => (
                        <option key={index}>{option}</option>
                    ))}                    
                </select>
                <img src={selectArrow} alt="arrow" className="select_arrow"/>
            </div>
        </div>
    )
}
Select.propTypes = {
    type: PropTypes.oneOf(['labelTop', 'labelLeft', 'small', 'regular', 'large']),
}
export default Select;
import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import './select.css';
import selectArrow from '../../../images/arrow_down.svg';


const styled = {
    labelTop: "labelTop",
    labelLeft : "labelLeft",
    regular : "regular",
    small : "small",
    large : "large"
}

const Select = ({size = 'regular', label, children, type = 'labelTop'}) => {
   
    return(
        <div className = {classNames("select_wrapper", styled[type])}>
                <label>{label}</label>
            <div className={classNames("select", styled[size])}>
                <select>
                    <option>All</option>
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
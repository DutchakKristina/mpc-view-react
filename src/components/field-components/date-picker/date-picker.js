import React from "react";
import PropTypes from 'prop-types';


import DatePickerIcon from '../../../images/icon_date_picker.svg'
import './date-picker.css';

const DatePicker = ({label}) => {
    return(
        <div className="date_picker_wrap">
            <label>{label}</label>
            <div className="date_picker_inner">
                <div className="date">Expiration date and time <img className="date_picker_icon" src={DatePickerIcon} alt="date picker"/></div>
            </div>
        </div>
    )
}
DatePicker.propTypes = {
    label:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
}
export default DatePicker;
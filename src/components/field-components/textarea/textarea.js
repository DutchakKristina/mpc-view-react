import React from "react";
import PropTypes from 'prop-types';

import "./textarea.css";


const Textarea = ({label, placeholder}) => {
    return (
        <div className="textarea_box">
            <label>{label}</label>
            <div className="textarea_wrap">
                <textarea placeholder={placeholder}></textarea>
            </div>
        </div>
    )
}
Textarea.propTypes = {
    label: PropTypes.oneOfType([ PropTypes.string]),
    placeholder: PropTypes.oneOfType([ PropTypes.string])
    
}
export default Textarea;
import React from "react";
import "./textarea.css"

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

export default Textarea;
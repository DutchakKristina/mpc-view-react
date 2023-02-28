import React from "react";
import PropTypes from 'prop-types';

import './modal-simple-btn.css';

const ModalSimpleBtn = ({label, actionTitle}) => {
    return(
        <div className="simple_btn_wrap">
            <span>{label}</span>
            <span>or</span>
            <button className="show_modal">{actionTitle} <span className="btn_icon"></span></button>
        </div>
    )
}
ModalSimpleBtn.propTypes = {
    label: PropTypes.oneOfType([ PropTypes.string]),
    actionTitle: PropTypes.oneOfType([ PropTypes.string])
}
export default ModalSimpleBtn;
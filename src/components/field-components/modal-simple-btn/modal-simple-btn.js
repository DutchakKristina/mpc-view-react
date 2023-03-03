import React from "react";

import PropTypes, { func } from 'prop-types';
import './modal-simple-btn.css';

const ModalSimpleBtn = ({label, actionTitle, modalShow, preventDefault= true}) => {

    const buttonClick = (e) => {
        if(preventDefault){
            e.preventDefault(); 
        }
        modalShow(e);
    }

    return(
        <div className="simple_btn_wrap"  > 
            <span>{label}</span>
            <span>or</span>
            <button onClick={buttonClick} className="show_modal">{actionTitle} <span className="btn_icon"></span></button>
        </div>
    )
}
ModalSimpleBtn.propTypes = {
    label: PropTypes.oneOfType([ PropTypes.string]),
    actionTitle: PropTypes.oneOfType([ PropTypes.string]),

    modalShow: PropTypes.func,
}
export default ModalSimpleBtn;
import classNames from "classnames";
import React from "react";


import iconCloseModal from '../../images/icon_close_modal.svg';
import './modal-center.css';

const styled = {
    regular:'regular',
    big: 'big'
}

const ModalCenter = (  {show ,title, children,  size = "regular"}) => {
    if(!show){
        return null 
    }
    return(
        <div className="modal_center">
            <div className="modal_flex">
                <div className = {classNames("modal_inner", styled[size])}>
                    <div className="modal_close">
                        <img src={iconCloseModal} alt="close modal"/>
                    </div>
                    <h2 className="modal_title">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalCenter;
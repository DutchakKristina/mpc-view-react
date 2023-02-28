import React from "react";


import iconCloseModal from '../../images/icon_close_modal.svg';
import './modal-center.css';


const ModalCenter = ( props ) => {
    if(!props.show){
        return null 
    }
    return(
        <div className="modal_center">
            <div className="modal_flex">
                <div className="modal_inner">
                    <div className="modal_close">
                        <img src={iconCloseModal} alt="close modal"/>
                    </div>
                    <h2 className="modal_title">{props.title}</h2>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ModalCenter;
import React from "react";
import Button from "../field-components/button/button";
import Input from "../field-components/input/input";
import Select from "../field-components/select/select";
import Textarea from "../field-components/textarea/textarea";

import SaveIcon from "../../images/save_icon.svg";
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
                    <h2 className="modal_title">Add new Customer</h2>
                    <div className="modal_fields">
                        <Input label="Customers company name:" placeholder="Company name"></Input>
                        <Input label="Customers contact:" placeholder="Contact Information"></Input>
                        <Textarea label="Short company description:" placeholder="Short description"></Textarea>
                        <Select label="Country:" size= "large"></Select>
                        <Select label="Customer’s status" size= "large"></Select>
                    </div>
                    <Button>
                        Add Customer
                        <img src={SaveIcon} alt="save"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalCenter;
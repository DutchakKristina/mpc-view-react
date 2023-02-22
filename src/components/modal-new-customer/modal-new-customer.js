import React from "react";
import Button from "../field-components/button/button";
import Input from "../field-components/input/input";
import Select from "../field-components/select/select";
import Textarea from "../field-components/textarea/textarea";

import iconCloseModal from '../../images/icon_close_modal.svg';
import './modal-new-customer.css';


const ModalNewCustomer = ( props ) => {
    if(!props.show){
        return null
    }
    return(
        <div className="modal_customer">
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
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalNewCustomer;
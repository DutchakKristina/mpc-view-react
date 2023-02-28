import React from "react";

import Input from "../../field-components/input/input";
import Textarea from "../../field-components/textarea/textarea";
import Select from "../../field-components/select/select";

import SaveIcon from "../../../images/save_icon.svg";
import Button from "../../field-components/button/button";

import './new-customer-form.css';

const UserForm = () => {
    return(
        <div className="new_user_form">
            <div className="new_user_fields">
                <Input label="Customers company name:" placeholder="Company name" type="text"></Input>
                <Input label="Customers contact:" placeholder="Contact Information" type="text"></Input>
                <Textarea label="Short company description:" placeholder="Short description"></Textarea>
                <Select label="Country:" size= "large" options={[ {value: 'None', id: 4}, {value: 'test', id: 4}]} value='none'></Select>
                <Select label="Customer’s status" size= "large" options={[{value: 'test', id: 4}, 'test2']} value='none'></Select>
            </div>
            <Button handler={()=> {console.log(56789)}}>
                Add Customer
                <img src={SaveIcon} alt="save"/>
            </Button>
        </div>
    )
}

export default UserForm;
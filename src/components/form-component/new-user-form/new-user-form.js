import React from "react";
import Button from "../../field-components/button/button";
import DatePicker from "../../field-components/date-picker/date-picker";
import Input from "../../field-components/input/input";
import Select from "../../field-components/select/select";


import ButtonIcon from '../../../images/save_icon.svg'
import './new-user-form.css';

const NewUserForm = () => {
    return(
        <div className="new-user-form">
            <div className="flex_wrap">
                <Input placeholder="John Smith" label="User name:" type="text"></Input>
                <Input type="email" placeholder="Jjohn.smith@example.com" label="Email address:"/>
                <Input type="text" placeholder="+441234567890" label="Phone number:"/>
                <Select size = "large" label="User type:" selectedValue="Unassignet" options={[{value: 'Unassignet', id: "4"},{value:"None", id:"4"}]}></Select>
                <Select size = "large" label ="Customer:" selectedValue="None" options={[{value: 'None', id: "4"},{value:"Some", id:"4"}]}></Select>
                <Input type="password" label="Password:"/>
                <DatePicker label="Expiration date:"/>
            </div>
            <Button>
                Add User
                <img src={ButtonIcon} alt="save icon"/>
            </Button>
        </div>
    )
}


export default NewUserForm;
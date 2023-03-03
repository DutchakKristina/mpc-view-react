import React, {useState} from "react";

import Input from "../../field-components/input/input";
import Select from "../../field-components/select/select";
import Button from "../../field-components/button/button";
import ModalCenter from "../../modal-center/modal-center";
import UserForm from "../new-customer-form/new-customer-form";
// import { useState } from "react";

import SaveIcon from "../../../images/save_icon.svg";
import ModalSimpleBtn from "../../field-components/modal-simple-btn/modal-simple-btn";
import SingleField from "./new-project-single-field";

import "./new-project-form.css"; 


const NewProject = () => {
    // const [showCustomerModal, setShowCustomerModal] = useState(false);

    return (
        <>
        <div className="new_proj_form">
            <div className="flex_field">
                <Input label="Project Name" type="text"/>
                <Select label="Project Status:" size="large" options={[{value: 'Choose Project Status', id: 8}, {value: 'test2', id: 1}]} selectedValue='Choose Project Status'></Select>
                <Select label="Select a Country:" size="large" options={[{value: 'Pick a Country', id: 3}, {value: 'test2', id: 5}]} selectedValue='Pick a Country'></Select>
                <Select label= { <ModalSimpleBtn label = "Select a Customer:" actionTitle="Add New Customer"/> } size="large"  selectedValue = "Pick a Customer" options={[{value: 'Pick a Customer', id:'7'}]}></Select>
            </div>
            <div className="new_user_projects">
                <h3 className="modal_subtitle">Assign this project to Users</h3>
                <div className="user_projects_wrap">                   
                  <SingleField  label = {<ModalSimpleBtn modalShow={()=> {console.log(55555);}} label = "Select a Users:" actionTitle="Add New User" />}/>
                  <SingleField/>
                  <SingleField/>
                  <SingleField/>
                </div>
            </div>
            <Button>
                Save Project
                <img src={SaveIcon} alt="save" />
            </Button>
        </div>
        {/* {showCustomerModal && (
            <ModalCenter title='Add new Customer'>
                <UserForm/>
            </ModalCenter>  
        )} */}
        </>
    )
}

export default NewProject;
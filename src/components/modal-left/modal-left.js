import React from "react";
import Input from "../field-components/input/input";
import Select from "../field-components/select/select";
import Button from "../field-components/button/button";

import SaveIcon from "../../images/save_icon.svg"
import './modal-left.css';

const ModalLeft = () => {
    return (
        <div className="modal_window">
            <div className="modal_flex">
                <div className="modal_inner">
                    <div className="close_btn"></div>
                    <h2 className="modal_title">Add New Project</h2>
                    <div className="flex_field">
                        <Input label = "Project Name"/>
                        <Select label="Project Status:" size="large"></Select>
                        <Select label="Select a Country:" size="large"></Select>
                        <Select label="Select a Customer:" size="large"></Select>
                    </div>
                    <div className="new_user_projects">
                        <h3 className="modal_subtitle">Assign this project to Users</h3>
                        <div className="user_projects_wrap">
                            <Select label="Project Status:" size="large"></Select>
                            <Select size="large"></Select>
                            <Select size="large"></Select>
                            <Select size="large"></Select>
                        </div>
                    </div>
                    <Button>
                        Save Project
                        <img src={SaveIcon} alt="save"/>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ModalLeft;
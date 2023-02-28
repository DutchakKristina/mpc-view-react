import React from "react";

import Input from "../../field-components/input/input";
import Select from "../../field-components/select/select";
import Button from "../../field-components/button/button";
// import { useState } from "react";

import SaveIcon from "../../../images/save_icon.svg";
const NewProject = () => {
    return (
        <div className="new_proj_form">
            <div className="flex_field">
                <Input label="Project Name" />
                <Select label="Project Status:" size="large"></Select>
                <Select label="Select a Country:" size="large"></Select>
                <Select label="Select a Customer:" size="large"></Select>
            </div>
            <div className="new_user_projects">
                <h3 className="modal_subtitle">Assign this project to Users</h3>
                <div className="user_projects_wrap">
                    <div className="user_project_inner">
                        <Select label="Project Status:" size="large"></Select>
                        <div className="modal_btn_edit">
                            <span className="modal_small_btn add_project"></span>
                            <span className="modal_small_btn delete_project"></span>
                        </div>
                    </div>
                    <div className="user_project_inner">
                        <Select size="large"></Select>
                        <div className="modal_btn_edit">
                            <span className="modal_small_btn add_project"></span>
                            <span className="modal_small_btn delete_project"></span>
                        </div>
                    </div>
                    <div className="user_project_inner">
                        <Select size="large"></Select>
                        <div className="modal_btn_edit">
                            <span className="modal_small_btn add_project"></span>
                            <span className="modal_small_btn delete_project"></span>
                        </div>
                    </div>
                    <div className="user_project_inner">
                        <Select size="large"></Select>
                        <div className="modal_btn_edit">
                            <span className="modal_small_btn add_project"></span>
                            <span className="modal_small_btn delete_project"></span>
                        </div>
                    </div>
                </div>
            </div>
            <Button>
                Save Project
                <img src={SaveIcon} alt="save" />
            </Button>
        </div>
    )
}

export default NewProject;
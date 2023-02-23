import React from "react";
import Input from "../field-components/input/input";
import Select from "../field-components/select/select";
import Button from "../field-components/button/button";

import SaveIcon from "../../images/save_icon.svg";
import iconCloseModal from '../../images/icon_close_modal.svg';
import './modal-left.css';

const ModalLeft = ( props ) => {
    if(!props.show){
        return null
    }
    return (
        <div className="modal_window">
            <div className="modal_flex">
                <div className="modal_inner">
                    <div className="modal_close">
                        <img src={iconCloseModal} alt="close modal"/>
                    </div>
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
                        <img src={SaveIcon} alt="save"/>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ModalLeft;
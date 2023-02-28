import React from "react";
import Select from "../../field-components/select/select";


const SingleField = (props) => {
    return (
        <div className="user_project_inner">
            <Select label={props.label} size="large"></Select>
            <div className="modal_btn_edit">
                <span className="modal_small_btn add_project"></span>
                <span className="modal_small_btn delete_project"></span>
            </div>
        </div>
    )
}


export default SingleField;

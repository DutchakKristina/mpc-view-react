import classNames from "classnames";
import React from "react";

import IconEdit from '../../../images/icon_edit.svg';
import IconDelete from '../../../images/icon_trash.svg';

import './project-row.css';

const ProjectRow = ({ data }) => {
    return (
        <div className="project_row row">
            <div className="edit_project proj_option">
                <img src={IconEdit} alt="edit"/>
            </div>
            <div><a href="#s">{data.name}</a></div>
            <div>{data.country}</div>
            <div>{data.customer}</div>
            <div className={classNames("status", [data.status])}>{data.status} <span className="status_icon"></span></div>
            <div className="delete_project proj_option">
                <img src={IconDelete} alt="delete"/>
            </div>

        </div>
    )
}


export default ProjectRow;
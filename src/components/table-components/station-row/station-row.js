import classNames from "classnames";
import React from "react";

import IconEdit from '../../../images/icon_edit.svg';
import arrowIcon from '../../../images/icon_arrow_right.svg'
import './station-row.css';

const StationRow = ({data}) => {
    return(
        <div className="station_row row">
            <div><a href="#s">{data.station}</a></div>
            <div>{data.project}</div>
            <div>{data.country}</div>
            <div>{data.customer}</div>
            <div>{data.type}</div>
            <div>{data.health}</div>
            <div>{data.last_reported}</div>
            <div className={classNames("status", [data.status])}>{data.status} <span className="status_icon"></span></div>
            <div className="btn_wrapper">
                <button className="cell_button"><img src={arrowIcon} alt="arrow"/></button>
            </div>
            <div className="details">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="edit_project proj_option">
                <img src={IconEdit} alt="edit"/>
            </div>
        </div>
    )
}


export default StationRow;
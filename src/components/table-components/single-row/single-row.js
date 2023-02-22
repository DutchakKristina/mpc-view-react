import React from "react";
import './single-row.css';
import DeleteRow from '../../../images/icon_trash.svg';
import EditRow from '../../../images/icon_edit.svg';


const SingleRow = (props) => {
    return (
        <div className="row single-row">

            <div className="cell cell_name">
                <a href="#s" >Noord Aa Project</a>
            </div>
            <div className="cell cell_country">
                Netherlands
            </div>
            <div className="cell cell_customer">Adams Contracting LLC</div>
            <div className="cell cell_status">
                <p className= "status active">
                    <span className="status_name ">Active</span>
                    <span className="status_icon"></span>
                </p>
            </div>
            <div className="edit_row"><img src={EditRow} alt="edit row" /></div>
            <div className="delete_row"><img src={DeleteRow} alt="delete row" /></div>
        </div>
    )
}
export default SingleRow;
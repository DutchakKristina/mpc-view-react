import React from "react";

import './modal-station-row.css';

const ModalStationRow = ({ data }) => {
    return (
        <div className="modal_station_row row">
            <div>
                <label for={data.id} className="checkbox_wrap"><input type="checkbox" id={data.id} /><span class="checker"></span>{data.parameter}</label>
            </div>
            <div>{data.alias}</div>
            <div>{data.register_address}</div>
            <div>{data.register_size}</div>
            <div>{data.register_type}</div>
            <div>{data.data_type}</div>
        </div>
    )
}


export default ModalStationRow;
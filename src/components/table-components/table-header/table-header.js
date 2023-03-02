import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import './table-header.css';


const TableHeader = ({columns}) => {
   
    return(
        <div className="table_header">
            <div className={classNames("header_row")}> 
                {columns.map((column) => (
                    <div className="tableCell" key={column}>{column}</div>
                ))}
            </div>
        </div>
       
    )
}
TableHeader.propTypes = {
    columns: PropTypes.array.isRequired
}

export default TableHeader;
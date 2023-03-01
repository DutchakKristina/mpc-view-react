import React from "react";
import classNames from "classnames";

import './table-header.css';

const styled = {
    large: "large",
    regular: "regular"
}
const TableHeader = ({columns, type='regular'}) => {
   
    return(
        <div className="table_header">
            <div className={classNames("header_row", styled[type])}> 
                {columns.map((column) => (
                    <div className="tableCell" key={column}>{column}</div>
                ))}
            </div>
        </div>
       
    )
}
export default TableHeader;
import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import './table-header.css';

const styled = {
    large: "large",
    regular: "regular"
}
const TableHeader = ({columns, size='regular'}) => {
   
    return(
        <div className="table_header">
            <div className={classNames("header_row", styled[size])}> 
                {columns.map((column) => (
                    <div className="tableCell" key={column}>{column}</div>
                ))}
            </div>
        </div>
       
    )
}
TableHeader.propTypes = {
    size: PropTypes.oneOf(['large', 'regular']),
    columns: PropTypes.array.isRequired
}

export default TableHeader;
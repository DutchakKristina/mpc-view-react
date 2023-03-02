import React from "react";
import PropTypes from 'prop-types';
import NumberOfRecords from "../number-of-records";
import Pagination from "../pagination/pagination";
import TableHeader from "../table-header/table-header";

import "./table.css";


const Table = ({ data, RowComponent, columns}) => {
    return (
        <>
        <div className="table">
            <div className="table_inner">
                <TableHeader  columns={columns}></TableHeader>
                {data.map((row) => (
                    <RowComponent key={row.id} data={row} />
                ))}
             </div>
        </div>
        <div className="table_pagination">
            <Pagination/>            
            <NumberOfRecords totalProj="120" startNum="15" endNum="25"/>
        </div>
        </>
    )
  
}

Table.propTypes = {
    RowComponent: PropTypes.element,
    data: PropTypes.any,
    columns: PropTypes.any
}

export default Table;
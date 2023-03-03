import React, { useState } from 'react';
import PropTypes from 'prop-types';


import NumberOfRecords from "../number-of-records";
import Pagination from "../pagination/pagination";
import TableHeader from "../table-header/table-header";

import "./table.css";


const Table = ({ data, RowComponent, columns}) => {
    const [showPagination, setShowPagination] = useState(true);
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
        {data.length > 5 && showPagination && (
            <div className="table_pagination">
            <Pagination/>            
            <NumberOfRecords totalProj="120" startNum="15" endNum="25"/>
        </div>
      )}
        
        </>
    )
  
}

Table.propTypes = {
    data: PropTypes.any,
    columns: PropTypes.any
}

export default Table;
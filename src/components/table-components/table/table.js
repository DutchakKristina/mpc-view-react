import React from "react";
import NumberOfRecords from "../number-of-records";
import Pagination from "../pagination/pagination";
import TableHeader from "../table-header/table-header";

import "./table.css";


const Table = ({ data, RowComponent, columns, type}) => {
    return (
        <>
        <div className="table">
            <div className="table_inner">
                <TableHeader type={type} columns={columns}></TableHeader>
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



export default Table;
import React from "react";
import Pagination from "../pagination/pagination";
import './project-table.css'
import SingleRow from "../single-row/single-row";

const ProjectTable = () => {
    return (
        <div className="table">
            <div className="table-wrapper">
                <div className="table_header_wrap">
                    <div className="row table_header">
                        <div className="cell">
                            Name
                        </div>
                        <div className="cell">
                            Country
                        </div>
                        <div className="cell">
                            Customer
                        </div>
                        <div className="cell">
                            Status
                        </div>
                    </div>
                </div>
                <div className="row_wrapper">
                   <SingleRow />
                   <SingleRow />
                   <SingleRow />
                   <SingleRow />
                   <SingleRow />
                   <SingleRow />
                </div>
            </div>
           <Pagination/>
        </div>
    )
}

export default ProjectTable;
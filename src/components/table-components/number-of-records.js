import React from "react";

import PropTypes from 'prop-types';

const NumberOfRecords = ({totalProj, startNum, endNum}) => {
    return (
        <div className="num_of_proj">
            <p className="num_of_proj_text">Showing <span className="from_number">{startNum}</span> to <span className="to_number">{endNum}</span> of <span className="total_number">{totalProj}</span> entries</p>
        </div>
    )
}
NumberOfRecords.propTypes = {
    totalProj: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    startNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    endNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default NumberOfRecords;

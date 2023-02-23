import React from "react";
import './pagination.css'

import arrow from '../../../images/arrow_down.svg'
const Pagination = () => {
    return (
        <div className="pagination_wrapper">
            <ul className="pagination">
                <li className="arrow_pag"><img src={arrow} alt=""/></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li className="arrow_pag"><img src={arrow} alt=""/></li>
            </ul>
        </div>
    )
}
export default Pagination;
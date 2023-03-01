import React from "react";
import Search from "../field-components/search/search";
import PropTypes from 'prop-types';

import './filter.css';


const Filter = ({children}) => {
    return (
        <div className="filter_wrapper filter">
            <div className="filter_inner flex">
                <div className="filters_wrapper flex">
                    <h4 className="filter_title">Sort by</h4>
                    {children}
                </div>
                <Search />
            </div>
        </div>
    )
} 

export default Filter;
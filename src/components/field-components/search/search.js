import React from "react";
import './search.css'
import searchIcon from '../../../images/icon_search.svg';

const Search = () => {
    return (
        <div className="search_wrapper">
            <input type="text" placeholder="Search a alarm..." />
            <span className="search_icon"><img src={searchIcon} alt="searc icon" /></span>
        </div>
    )
}
export default Search;
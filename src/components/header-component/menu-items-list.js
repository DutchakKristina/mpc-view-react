import React from "react";
import MenuItem from "./menu-item";
import PropTypes from 'prop-types';

const MenuItemsList = ({list}) => {
    return(
        <nav className="menu_wrapper">
            <ul className="menu_inner">
                {list.map((item, i) => (
                    <MenuItem key={i} {...item}/>
                ))}
            </ul>
        </nav>
    )
}
MenuItemsList.propTypes = {
    list:PropTypes.array
}
export default MenuItemsList;
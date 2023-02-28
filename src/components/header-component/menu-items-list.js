import React from "react";
import MenuItem from "./menu-item";

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

export default MenuItemsList;
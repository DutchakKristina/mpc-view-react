import React from "react";
import menuList from '../../constants';

const MenuItem = () => {
    return(
        <ul className="menu_inner">
            {menuList.map((menuList, index) => (
                <li key={index}><a href={menuList.url}><img src={menuList.img} alt="item" />{menuList.title}</a> </li>
            ))}
        </ul>
    )
}

export default MenuItem;
import React from "react";

const MenuItem = ({title, url, img}) => {
    return(
        <li><a href= {url}><img src={img} alt="single item"/>{title}</a></li>
        
    )
}

export default MenuItem;
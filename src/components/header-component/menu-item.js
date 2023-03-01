import React from "react";
import PropTypes from 'prop-types';

const MenuItem = ({title, url, img}) => {
    return(
        <li><a href= {url}><img src={img} alt="single item"/>{title}</a></li>
        
    )
}
MenuItem.propTypes = {
    title: PropTypes.oneOfType([ PropTypes.string, PropTypes.number,]),
    url: PropTypes.string
}
export default MenuItem;
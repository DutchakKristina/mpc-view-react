import React from "react";
import Button from "../field-components/button/button";
import Search from "../field-components/search/search";
import Select from "../field-components/select/select";
import ButtonReset from "../field-components/button-reset/button-reset"

import './filter.css';


const Filter = () => {
    return (
        <div className="filter_wrapper filter">
            <div className="filter_inner">
                <div className="filters_wrapper">
                    <h4 className="filter_title">Sort by</h4>
                    <Select type="labelLeft" label="Country:"></Select>
                    <Select type="labelLeft" label="Customer:" />
                    <Select size="small" type="labelLeft" label="Status:" />
                    <ButtonReset/>
                    <Button type="simple">
                        Apply
                    </Button>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Filter;
import React from "react";
import Button from "../field-components/button/button";
import Search from "../field-components/search/search";
import Select from "../field-components/select/select";
import ButtonReset from "../field-components/button-reset/button-reset"

import './filter.css';


const Filter = () => {
    return (
        <div className="filter_wrapper filter">
            <div className="filter_inner flex">
                <div className="filters_wrapper flex">
                    <h4 className="filter_title">Sort by</h4>
                    <Select type="labelLeft" label="Country:" options={[{value: 'test', id: 4}, 'test2']} value='test'></Select>
                    <Select type="labelLeft" label="Customer:" />
                    <Select size="small" type="labelLeft" label="Status:" />
                    <div className="filters_buttons">
                        <ButtonReset />
                        <Button type="simple">
                            Apply
                        </Button>
                    </div>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Filter;
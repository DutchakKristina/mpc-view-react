import React from "react";
import ButtonReset from "../components/field-components/button-reset/button-reset";
import Button from "../components/field-components/button/button";
import Select from "../components/field-components/select/select";
import Filter from "../components/filter/filter";

import mainButtonIcon from '../images/icon_plus.svg';

const StationPage = () => {
    return (
        <>
            <section className="section_title">
                <div className="title_container">
                    <h1 className="page_title">Stations(356)</h1>
                    <Button type='primary'>
                        Add new Project
                        <img src={mainButtonIcon} alt="button icon" />
                    </Button>
                </div>
            </section>
            <section className="section_filter">
                <Filter>
                    <Select type="left" label="Project:" options={[{value: 'All', id: 4}, {value: 'test2', id: 1}]} selectedValue='All'></Select>
                    <Select type="left" label="Country:" options={[{value: 'All', id: 3}, {value: 'test2', id: 5}]} selectedValue='All'/>
                    <Select type="left" label="Customer:" options={[{value: 'All', id: 3}, {value: 'test2', id: 5}]} selectedValue='All'/>
                    <Select size="small" type="left" label="Status:" options={[{value: 'All', id: 8}, {value: 'test2', id: 9}]} selectedValue='All'/>
                    <div className="filters_buttons">
                        <ButtonReset/>
                        <Button type="simple">
                            Apply
                        </Button>
                    </div>
                </Filter>
            </section>
        </>

    )
}


export default StationPage;
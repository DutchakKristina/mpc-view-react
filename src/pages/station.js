import React from "react";
import ButtonReset from "../components/field-components/button-reset/button-reset";
import Button from "../components/field-components/button/button";
import Select from "../components/field-components/select/select";
import Filter from "../components/filter/filter";
import StationRow from "../components/table-components/station-row/station-row";
import Table from "../components/table-components/table/table";

import mainButtonIcon from '../images/icon_plus.svg';

const usersData = [
    { id: 1, station: "Pro - 22E", project: 'Noord Aa Project', country: "Netherlands", customer: "Adams Contracting LLC", type: "Trios Station (Pro)", health:"Proper communication", 'last_reported':"2023-02-09 22:30:00", status: "active" },
    { id: 2, station: "Pro - 23E", project: 'Brazil', country: "Netherlands", customer: "Adams Contracting LLC",type: "Trios Station (Pro)", health:"Proper communication", 'last_reported':"2023-02-09 22:30:00", status: "inactive"  },
    { id: 3, station: "Pro - 24E", project: 'Rio Guandu', country: "Netherlands", customer: "Adams Contracting LLC", type: "Trios Station (Pro)", health:"Proper communication", 'last_reported':"2023-02-09 22:30:00", status: "active" },
  ];

const columns = ['station', 'project', 'Country', 'Customer', 'type', 'Health', 'last reported', 'Status'];

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
            <section className="section_table">
               <Table RowComponent={StationRow} data={usersData} columns = {columns} type='large'/>
            </section>
        </>

    )
}


export default StationPage;
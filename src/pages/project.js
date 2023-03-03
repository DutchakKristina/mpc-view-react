import React, {useState} from "react";
import Button from "../components/field-components/button/button";
import Filter from "../components/filter/filter";
import ModalLeft from "../components/modal-left/modal-left";


import mainButtonIcon from '../images/icon_plus.svg';
import '../custom-css/home.css';
import ModalCenter from "../components/modal-center/modal-center";
import NewProject from "../components/form-component/new-project-form/new-project-form";
import UserForm from "../components/form-component/new-customer-form/new-customer-form";
import NewUserForm from "../components/form-component/new-user-form/new-user-form";
import Select from "../components/field-components/select/select";
import ButtonReset from "../components/field-components/button-reset/button-reset";
import Table from "../components/table-components/table/table";
import ProjectRow from "../components/table-components/project-row/project-row";

const newData = [
    { id: 1, name: "Noord Aa Project", country: "Netherlands", customer: "Adams Contracting LLC", status: "active" },
    { id: 2, name: "Rio Guandu", country: "Brazil", customer: "Adams Contracting LLC", status: "inactive"  },
    { id: 3, name: "Noord Aa Project", country: "Netherlands", customer: "Adams Contracting LLC", status: "active" },
    { id: 4, name: "Rio Guandu", country: "Brazil", customer: "Adams Contracting LLC", status: "inactive" },
    { id: 5, name: "Noord Aa Project", country: "Netherlands", customer: "Adams Contracting LLC", status: "active" },
    { id: 6, name: "Rio Guandu", country: "Brazil", customer: "Adams Contracting LLC", status: "inactive" },
  ];
const columns = ['Name', 'country', 'customer', 'status'];

const ProjectPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <> 
            <section className="section_title">
                <div className="title_container">
                    <h1 className="page_title">Projects(112)</h1>
                    <Button type='primary' handler={()=> {setShowModal(true);}}>
                        Add new Project
                        <img src={mainButtonIcon} alt=""/>
                    </Button>
                </div>
            </section>
            <section className="section_filter">
                <Filter>
                    <Select type="left" label="Country:" options={[{value: 'All', id: 4}, {value: 'test2', id: 1}]} selectedValue='All'></Select>
                    <Select type="left" label="Customer:" options={[{value: 'All', id: 3}, {value: 'test2', id: 5}]} selectedValue='All'/>
                    <Select size="small" type="left" label="Status:" options={[{value: 'All', id: 8}, {value: 'test2', id: 9}]} selectedValue='All'/>
                    <div className="filters_buttons">
                        <ButtonReset />
                        <Button type="simple">
                            Apply
                        </Button>
                    </div>
                </Filter>
            </section>
            <section className="section_table project_table">
              <Table RowComponent={ProjectRow} data={newData} columns = {columns}/>
            </section>
            <ModalLeft  title = "Add new Project">
                <NewProject/>
            </ModalLeft>
            <ModalCenter title='Add new Customer'>
                <UserForm/>
            </ModalCenter>    
            <ModalCenter title = 'Add new User'>
                <NewUserForm/>
            </ModalCenter>      
        </>


    )
}

export default ProjectPage;
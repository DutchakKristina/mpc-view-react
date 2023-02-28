import React from "react";
import Button from "../components/field-components/button/button";
import Filter from "../components/filter/filter";
import ModalLeft from "../components/modal-left/modal-left";

import ProjectTable from "../components/table-components/project-table/project-table";

import mainButtonIcon from '../images/icon_plus.svg';
import '../custom-css/home.css';
import ModalCenter from "../components/modal-center/modal-center";
import NewProject from "../components/form-component/new-project-form/new-project-form";
import UserForm from "../components/form-component/new-user-form/new-user-form";

const ProjectPage = () => {
    return (
        <>
            <section className="section_title">
                <div className="title_container">
                    <h1 className="page_title">Projects(112)</h1>
                    <Button type='primary'>
                        Add new Project
                        <img src={mainButtonIcon} alt=""/>
                    </Button>
                </div>
            </section>
            <section className="section_filter">
                <Filter/>
            </section>
            <section className="section_table">
                <ProjectTable/>
            </section>
            <ModalLeft title = "Add new Project">
                <NewProject/>
            </ModalLeft>
            <ModalCenter show title='Add new Customer'>
                <UserForm/>
            </ModalCenter>          
        </>


    )
}

export default ProjectPage;
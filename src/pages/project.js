import React from "react";
import Button from "../components/field-components/button/button";
import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import ModalLeft from "../components/modal-left/modal-left";

import ProjectTable from "../components/table-components/project-table/project-table";


import mainButtonIcon from '../images/icon_plus.svg';
import '../custom-css/home.css';
import ModalCenter from "../components/modal-center/modal-cemter";

const ProjectPage = () => {
    return (
        <>
            <Header />
            <main>
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
                <ModalLeft />
                <ModalCenter ></ModalCenter>
                
            </main>
        </>


    )
}

export default ProjectPage;
import React from "react";
import Button from "../components/field-components/button/button";
import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import mainButtonIcon from '../images/icon_plus.svg';
import ProjectTable from "../components/table-components/project-table/project-table";
import '../custom-css/home.css';
import ModalLeft from "../components/modal-left/modal-left";
const ProjectPage = () => {
    return (
        <div>
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
                <ModalLeft/>
            </main>
        </div>


    )
}

export default ProjectPage;
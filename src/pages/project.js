import React from "react";
import Button from "../components/field-components/button/button";
import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import ModalLeft from "../components/modal-left/modal-left";

import ProjectTable from "../components/table-components/project-table/project-table";
import Input from "../components/field-components/input/input";
import Textarea from "../components/field-components/textarea/textarea";
import Select from "../components/field-components/select/select";

import SaveIcon from "../images/save_icon.svg";
import mainButtonIcon from '../images/icon_plus.svg';
import '../custom-css/home.css';
import ModalCenter from "../components/modal-center/modal-center";

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
                <ModalCenter title='Add new Customer'>
                    <>
                    <div className="modal_fields">
                        <Input label="Customers company name:" placeholder="Company name"></Input>
                        <Input label="Customers contact:" placeholder="Contact Information"></Input>
                        <Textarea label="Short company description:" placeholder="Short description"></Textarea>
                        <Select label="Country:" size= "large"></Select>
                        <Select label="Customer’s status" size= "large"></Select>
                    </div>
                    <Button>
                        Add Customer
                        <img src={SaveIcon} alt="save"/>
                    </Button>
                    </>
                </ModalCenter>
            </main>
        </>


    )
}

export default ProjectPage;
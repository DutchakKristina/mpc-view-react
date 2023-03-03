import React from "react";
import Button from "../../field-components/button/button";
import Input from "../../field-components/input/input";
import Select from "../../field-components/select/select";
import Textarea from "../../field-components/textarea/textarea"

import SaveIcon from "../../../images/save_icon.svg";

import '../../../custom-css/home.css';
import './new-station-form.css';
import Table from "../../table-components/table/table";
import ModalStationRow from "../../table-components/modal-station-row/modal-station-row";


const newData = [
    { id: 1, parameter: "Battery 12 (volts)", alias: "Battery 12V", register_address: "20008", register_size: "2", register_type: "2", data_type: "Float" },
    { id: 2, parameter: "Chlorophyll-a (μg/L)", alias: "Battery 24V", register_address: "20007", register_size: "2", register_type: "2", data_type: "Unsigned Int" },
    { id: 3, parameter: "DO mg/l (mg/L)", alias: "GSM", register_address: "20040", register_size: "1", register_type: "2", data_type: "Float" },
  ];
const columns = ['parameter', 'alias', 'Register Address', 'Register Size', 'Register Type', 'Data Type'];

const NewStationForm = () => {
    return (
        <div className="new_station_form">
            <div className="new_station_wrapper">
                <h3 className="form_sub_title">Station details</h3>
                <div className="inner_fields">
                    <div className="left_side">
                        <Input type="text" label="Station name *" />
                        <Input type="text" label="Serial Number (5 digits, used for MQTT, data intake & Winch/Depth data)" />
                        <Select label="Device Type *" size="large" options={[{ value: 'Choose device type', id: 42 }, { value: 'test2', id: 24 }]} selectedValue='Choose device type' />
                        <Select size="large" label="Status *" options={[{ value: 'Choose status', id: 44 }, { value: 'test2', id: 1 }]} selectedValue='Choose status' />
                        <Input type="text" label="Latitude *" />
                        <Input type="text" label="Longitude *" />
                        <Input type="text" label="SIM Subscriber ID # (ICCID used for Pod System's API)" />
                        <Select size="large" label="Station Connection Protocol *" options={[{ value: 'Choose Project Status', id: 18 }, { value: 'test2', id: 3 }]} selectedValue='Choose Project Status' />
                    </div>
                    <div className="right_side">
                        <div className="inputs_wrapper">
                            <Input type="text" label="MODBUS IPv4 Address *" />
                            <Input type="text" label="MODBUS TCP Port *" />
                            <Input type="text" label="MODBUS Slave ID *" />
                        </div>
                        <div className="data_acquisition_wrapper">
                            <Select size="large" label="Data Acquisition *" options={[{ value: 'Active', id: 7 }, { value: 'test2', id: 14 }]} selectedValue='Active' />
                            <div className="data_min_max">
                                <label className="custom_label">Data Acquisition Details (sampling rate - minutes & priority) *</label>
                                <div className="data_min_max_inner">
                                    <Input label="min" position="left" type="text" />
                                    <Select size="large" options={[{ value: 'Priority 1', id: 8 }, { value: 'test2', id: 5 }]} selectedValue='Priority 1' />
                                </div>
                            </div>
                        </div>
                        <Textarea label="Notes" placeholder="Notes" />
                    </div>
                </div>
                <h3 className="form_sub_title">project details</h3>
                <div className="inner_fields">
                    <div className="left_side">
                        <Select label="Project *" size="large" options={[{ value: 'Select project', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose Project Status' />
                        <Select size="large" label="alias *" options={[{ value: 'Select alias', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose status' />
                    </div>
                    <div className="right_side">
                        <Select size="large" label="Customer *" options={[{ value: 'Pick customer', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Pick customer' />
                    </div>
                </div>
                <h3 className="form_sub_title">Station Parameters<span>(Section available only on existing stations. Please save the new stations first!)
                </span></h3>          
                <div className="new_station_table">     
                    <Table RowComponent={ModalStationRow} data={newData} columns = {columns}></Table>
                </div>
                <div className="new_station_btn">
                    <Button>
                        Update Station
                        <img src={SaveIcon} alt="save"/>
                    </Button>
                </div>
            </div>
        </div> 
    )
}

export default NewStationForm;
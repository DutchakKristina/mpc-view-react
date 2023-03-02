import React from "react";
import Input from "../../field-components/input/input";
import Select from "../../field-components/select/select";
import Textarea from "../../field-components/textarea/textarea"

import './new-station-form.css';

const NewStationForm = () => {
    return (
        <div className="new_station_form">
            <div className="new_station_wrapper">
                <h3 className="form_sub_title">Station details</h3>
                <div className="inner_fields">
                    <div className="left_side">
                        <Input type="text" label="Station name *" />
                        <Input type="text" label="Serial Number (5 digits, used for MQTT, data intake & Winch/Depth data)" />
                        <Select label="Device Type *" size="large" options={[{ value: 'Choose device type', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose Project Status' />
                        <Select size="large" label="Status *" options={[{ value: 'Choose status', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose status' />
                        <Input type="text" label="Latitude *" />
                        <Input type="text" label="Longitude *" />
                        <Input type="text" label="SIM Subscriber ID # (ICCID used for Pod System's API)" />
                        <Select size="large" label="Station Connection Protocol *" options={[{ value: 'Choose Project Status', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose Project Status' />
                    </div>
                    <div className="right_side">
                        <div className="inputs_wrapper">
                            <Input type="text" label="MODBUS IPv4 Address *" />
                            <Input type="text" label="MODBUS TCP Port *" />
                            <Input type="text" label="MODBUS Slave ID *" />
                        </div>
                        <div className="data_acquisition_wrapper">
                            <Select size="large" label="Data Acquisition *" options={[{ value: 'Choose device type', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose Project Status' />
                            <div className="data_min_max">
                                <label className="custom_label">Data Acquisition Details (sampling rate - minutes & priority) *</label>
                                <div className="data_min_max_inner">
                                    <Input label="min" position="left" type="text" />
                                    <Select size="large" options={[{ value: 'Priority 1', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Priority 1' />
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
                        <Select size="large" label="Country *" options={[{ value: 'Select country', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Choose status' />
                    </div>
                    <div className="right_side">
                        <Select size="large" label="Customer *" options={[{ value: 'Pick customer', id: 4 }, { value: 'test2', id: 1 }]} selectedValue='Pick customer' />
                    </div>
                </div>
                <h3 className="form_sub_title">Station Parameters<span>(Section available only on existing stations. Please save the new stations first!)
                </span></h3>
            </div>
        </div>
    )
}

export default NewStationForm;
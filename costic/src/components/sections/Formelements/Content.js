import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Dropdown } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Basic Form Elements</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleEmail">Email address</label>
                                        <input type="email" className="form-control" id="exampleEmail" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examplePassword">Password</label>
                                        <input type="password" className="form-control" id="examplePassword" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleSelect">Example select</label>
                                        <select className="form-control" id="exampleSelect">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleTextarea">Example textarea</label>
                                        <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Read Only Form Elements</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleEmail1" placeholder="name@example.com" defaultValue="johndoe@example.com" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examplePassword2">Password</label>
                                        <input type="password" className="form-control" id="examplePassword2" defaultValue="somepassword" placeholder="Password" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleSelect1">Example select</label>
                                        <select className="form-control" id="exampleSelect1" disabled>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleTextarea1">Example textarea</label>
                                        <textarea className="form-control" id="exampleTextarea1" rows={3} readOnly defaultValue={"Some text to be displayed"} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Checkboxes</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.ms-checkbox-state</code> in <code>.ms-checkbox-wrap</code>
                                </p>
                                <form>
                                    <ul className="ms-list d-flex">
                                        <li className="ms-list-item pl-0">
                                            <label className="ms-checkbox-wrap">
                                                <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                            </label> <span> Normal </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-checkbox-wrap">
                                                <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                            </label> <span> Checked </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-checkbox-wrap">
                                                <input type="checkbox" defaultValue disabled defaultChecked /> <i className="ms-checkbox-check" />
                                            </label> <span> Disabled </span>
                                        </li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-primary">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Primary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-secondary">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Secondary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-success">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Success </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-danger">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Danger </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-warning">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Warning </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-info">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Info </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-dark">
                                                        <input type="checkbox" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Dark </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Radio Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.ms-checkbox-state</code> in <code>.ms-checkbox-wrap</code>
                                </p>
                                <form>
                                    <ul className="ms-list d-flex">
                                        <li className="ms-list-item pl-0">
                                            <label className="ms-checkbox-wrap">
                                                <input type="radio" name="radioExample" defaultValue /> <i className="ms-checkbox-check" />
                                            </label> <span> Normal </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-checkbox-wrap">
                                                <input type="radio" name="radioExample" defaultValue defaultChecked /> <i className="ms-checkbox-check" />
                                            </label> <span> Checked </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-checkbox-wrap">
                                                <input type="radio" name="radioExample" defaultValue disabled /> <i className="ms-checkbox-check" />
                                            </label> <span> Disabled </span>
                                        </li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-primary">
                                                        <input type="radio" defaultValue name="radioExample2" defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Primary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-secondary">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Secondary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-success">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Success </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-danger">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Danger </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-warning">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Warning </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-info">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Info </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap ms-checkbox-dark">
                                                        <input type="radio" defaultValue name="radioExample2" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Dark </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Toggle Switches</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.ms-switch-state</code> in <code>.ms-switch-slider</code>
                                </p>
                                <form>
                                    <ul className="ms-list d-flex">
                                        <li className="ms-list-item pl-0">
                                            <label className="ms-switch">
                                                <input type="checkbox" /> <span className="ms-switch-slider round" />
                                            </label> <span> Normal </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked /> <span className="ms-switch-slider round" />
                                            </label> <span> Checked </span>
                                        </li>
                                        <li className="ms-list-item">
                                            <label className="ms-switch">
                                                <input type="checkbox" disabled /> <span className="ms-switch-slider round" />
                                            </label> <span> Disabled </span>
                                        </li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-primary round" />
                                                    </label> <span> Primary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-secondary round" />
                                                    </label> <span> Secondary </span>
                                                </li>
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-success round" />
                                                    </label> <span> Success </span>
                                                </li>
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-danger round" />
                                                    </label> <span> Danger </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="ms-list ms-list-display">
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-warning round" />
                                                    </label> <span> Warning </span>
                                                </li>
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-info round" />
                                                    </label> <span> Info </span>
                                                </li>
                                                <li>
                                                    <label className="ms-switch">
                                                        <input type="checkbox" defaultChecked /> <span className="ms-switch-slider ms-switch-dark round" />
                                                    </label> <span> Dark </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Form Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form>
                                    <input type="submit" className="btn btn-primary d-block" name="btn0" defaultValue="Disabled" disabled />
                                    <input type="submit" className="btn btn-primary d-block w-25" name="btn25" defaultValue="Short" />
                                    <input type="submit" className="btn btn-primary d-block w-50" name="btn50" defaultValue="Medium" />
                                    <input type="submit" className="btn btn-primary d-block w-100" name="btn100" defaultValue="Long" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Grouped Elements</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                        <div className="input-group-append"> <span className="input-group-text">@example.com</span>
                                        </div>
                                    </div>
                                    <div className="input-group">

                                            <Dropdown className="input-group-prepend">
                                                <Dropdown.Toggle variant="primary" className="btn-sm" id="dropdown-basic">
                                                Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item href="#/">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Form Sizing</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.col-form-label-size</code> and <code>.form-control-size</code>
                                </p>
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Small</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Small text" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Medium</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="colFormLabel" placeholder="Medium Text" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Large</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="Large Text" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
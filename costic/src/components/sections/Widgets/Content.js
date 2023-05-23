import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Tab, Nav, Dropdown, NavLink } from "react-bootstrap";
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import $ from 'jquery';
import Breadcrumb from './Breadcrumb';
import Charts from './Charts';
import Icons from './Icons';
import Notwigets from './Notwigets';
import Countryactivity from './Countryactivity';
import Salesactivity from './Salesactivity';

const phonetip = (
    <Tooltip>
        Call
    </Tooltip>
);
const videotip = (
    <Tooltip>
        Video Call
    </Tooltip>
);
const invitetip = (
    <Tooltip>
        Add to Chat
    </Tooltip>
);
const addtasktip = (
    <Tooltip>
        Add a Task to this block
    </Tooltip>
);

class Content extends Component {
    // Checkbox checked
    labelcheck = (e) => {
        var elem = e.target,
            parentlabel = elem.closest('.ms-to-do-task');
        $(parentlabel).toggleClass('task-complete');
    }
    // Delete card
    deletecardbtn = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-deletable');
        $(parentTask).slideUp('slow', function () { $(parentTask).remove(); });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    {/* Infographics Widgets */}
                    <div className="col-12">
                        <Charts />
                    </div>
                    {/* Icon cards Widget */}
                    <div className="col-12">
                        <Icons />
                    </div>
                    {/* Notifications Widgets */}
                    <div className="col-12">
                        <Notwigets />
                    </div>
                    {/* User Activity By Country Widget */}
                    <div className="col-xl-6 col-md-12">
                        <Countryactivity />
                    </div>
                    {/* Trade History Widget */}
                    <div className="col-xl-6 col-md-12">
                        <Salesactivity />
                    </div>
                    {/* Chat Widget */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh ms-widget ms-chat-conversations">
                            <div className="ms-panel-header">
                                <div className="ms-chat-header justify-content-between">
                                    <div className="ms-chat-user-container media clearfix">
                                        <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                            <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body ms-chat-user-info mt-1">
                                            <h6>Heather Brown</h6>
                                            <span className="text-disabled fs-12">Active Now  </span>
                                        </div>
                                    </div>
                                    <ul className="ms-list ms-list-flex ms-chat-controls">
                                        <OverlayTrigger placement="top" overlay={phonetip}>
                                            <li data-toggle="tooltip" data-placement="top" title="Call"> <i className="material-icons">local_phone</i>
                                            </li>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={videotip}>
                                            <li data-toggle="tooltip" data-placement="top" title="Video Call"> <i className="material-icons">videocam</i>
                                            </li>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={invitetip}>
                                            <li data-toggle="tooltip" data-placement="top" title="Add to Chat"> <i className="material-icons">person_add</i>
                                            </li>
                                        </OverlayTrigger>
                                    </ul>
                                </div>
                            </div>
                            <Scrollbar className="ms-panel-body ms-scrollable">
                                <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                </p>
                                        </div>
                                        <p className="ms-chat-time">10:33 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-incoming media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>
                                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                </p>
                                        </div>
                                        <p className="ms-chat-time">11:01 pm</p>
                                    </div>
                                </div>
                                <div className="ms-panel-footer">
                                    <div className="ms-chat-textbox">
                                        <ul className="ms-list-flex mb-0">
                                            <li className="ms-chat-vn"><i className="material-icons">mic</i> </li>
                                            <li className="ms-chat-input">
                                                <input type="text" name="msg" placeholder="Enter Message" />
                                            </li>
                                            <li className="ms-chat-text-controls ms-list-flex">
                                                <span> <i className="material-icons">tag_faces</i> </span>
                                                <span> <i className="material-icons">attach_file</i> </span>
                                                <span> <i className="material-icons">camera_alt</i> </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Scrollbar>
                        </div>
                    </div>
                    {/* Todo Widget */}
                    <div className="col-xl-6 col-md-12 ms-deletable ms-todo-list">
                        <div className="ms-card ms-widget ms-card-fh">
                            <div className="ms-card-header clearfix">
                                <h6 className="ms-card-title">Menu Lists</h6>
                                <OverlayTrigger placement="left" overlay={addtasktip}>
                                    <button data-toggle="tooltip" data-placement="left" title="Add a Task to this block" className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled">add</i> </button>
                                </OverlayTrigger>
                            </div>
                            <div className="ms-card-body">
                                <ul className="ms-list ms-task-block">
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable">
                                        <label className="ms-checkbox-wrap ms-todo-complete" onClick={this.labelcheck}>
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                    <li className="ms-list-item ms-to-do-task ms-deletable" onClick={this.labelcheck}>
                                        <label className="ms-checkbox-wrap ms-todo-complete">
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Lorem ipsum dolor sit amet </span>
                                        <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger" onClick={this.deletecardbtn}> </i></button>
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </Link>
                                <Link to="#" className="text-disabled ms-delete-trigger float-right" onClick={this.deletecardbtn}> <i className="flaticon-trash"> </i> Delete </Link>
                            </div>
                        </div>
                    </div>
                    {/* Email Widget */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh ms-widget ms-email-widget">
                            <div className="ms-panel-header">
                                <div className="media clearfix">
                                    <div className="mr-3 align-self-center">
                                        <img src="assets/img/costic/customer-7.jpg" className="ms-img-small ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <h6>Heather Brown</h6>
                                    </div>
                                    <ul className="ms-email-options">
                                        <li><Link to="#" className="text-disabled"> <i className="material-icons">local_offer</i> Tags </Link></li>
                                        <li><Link to="#" className="text-disabled"> <i className="material-icons">folder</i> Folders </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <form method="post" className="clearfix">
                                    <div className="form-group mb-4">
                                        <input type="text" className="form-control" placeholder="Recipients" />
                                        <div className="ms-cc">
                                            <i className="material-icons">person</i> CC &amp; BCC
              </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="email" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <textarea rows={5} className="form-control" placeholder="Message" />
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Send Mail</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Food Widget */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-widget ms-crypto-widget">
                            <div className="ms-panel-header">
                                <h6>Favourite charts</h6>
                                <p>Food and iterm which are Favourite by the user</p>
                            </div>
                            <div className="ms-panel-body p-0">
                                <Tab.Container defaultActiveKey="mon">
                                    <Nav variant="tab" className="nav nav-tabs nav-justified has-gap px-4 pt-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="mon">Mon</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tue">Tue</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="wed">Wed</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="thu">Thu</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fri">Fri</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="mon">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Names</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tue">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wed">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thu">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fri">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    {/* Chat Widget (Active Chats) */}
                    <div className="col-xl-4 col-md-12">
                        <div className="ms-panel ms-widget ms-panel-fh">
                            <div className="ms-panel-body py-3 px-0">
                                <div className="ms-chat-container">
                                    <div className="ms-chat-header px-3">
                                        <div className="ms-chat-user-container media clearfix">
                                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                <img src="assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-chat-user-info mt-1">
                                                <h6>Anny Farisha</h6>
                                                <Dropdown className="custom-dropdown">
                                                    <Dropdown.Toggle as={NavLink} className="text-disabled fs-12 p-0" >Available</Dropdown.Toggle>
                                                    <Dropdown.Menu className="border-0 p-0">
                                                        <ul className="dropdown-menu show">
                                                            <li className="ms-dropdown-list">
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Busy</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Away</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Offline</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <form className="ms-form my-3" method="post">
                                            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                                <input type="search" className="ms-form-input w-100" name="search" placeholder="Search for People and Groups" />
                                                <i className="flaticon-search text-disabled" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="ms-chat-body">
                                        <Tab.Container defaultActiveKey="chats-2">
                                            <Nav variant="tab" className="nav nav-tabs tabs-bordered d-flex nav-justified px-3">
                                                <Nav.Item className="fs-12">
                                                    <Nav.Link eventKey="chats-2">Chats</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="fs-12">
                                                    <Nav.Link eventKey="groups-2">Groups</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="fs-12">
                                                    <Nav.Link eventKey="contacts-2">Contacts</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="chats-2">
                                                    <Scrollbar className="ms-scrollable">
                                                        <ul>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center">
                                                                    <span className="msg-count">3</span>
                                                                    <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <span className="ms-chat-time">2 Hours ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <span className="ms-chat-time">3 Days ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <Link to="#" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="material-icons">more_vert</i>
                                                                    </Link>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Delete</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Scrollbar>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="groups-2">
                                                    <Scrollbar className="ms-scrollable">
                                                        <ul>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src="assets/img/costic/customer-1.jpg" alt="member" /> </li>
                                                                        <li> <img src="assets/img/costic/customer-2.jpg" alt="member" /> </li>
                                                                        <li> <img src="assets/img/costic/customer-3.jpg" alt="member" /> </li>
                                                                        <li className="ms-group-count"> + 12 more </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src="assets/img/costic/customer-6.jpg" alt="member" /> </li>
                                                                        <li> <img src="assets/img/costic/customer-7.jpg" alt="member" /> </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                    <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                        <li> <img src="assets/img/costic/customer-1.jpg" alt="member" /> </li>
                                                                        <li> <img src="assets/img/costic/customer-2.jpg" alt="member" /> </li>
                                                                        <li> <img src="assets/img/costic/customer-3.jpg" alt="member" /> </li>
                                                                        <li className="ms-group-count"> + 4 more </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Scrollbar>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="contacts-2">
                                                    <Scrollbar className="ms-scrollable">
                                                        <ul>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-9.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                            <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                                <div className="ms-chat-img mr-3 align-self-center">
                                                                    <img src="assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                                                </div>
                                                                <div className="media-body ms-chat-user-info mt-1">
                                                                    <h6>John Doe</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </Scrollbar>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Followers Widget */}
                    <div className="col-xl-4 col-md-12">
                        <div className="ms-panel ms-panel-fh ms-widget">
                            <div className="ms-panel-header">
                                <h6>Followers</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <ul className="ms-followers ms-list ms-scrollable">
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-1.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>Nathaniel Bustos</h6>
                                            <span className="fs-12">Quality Manager</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-2.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>Anny Farisha</h6>
                                            <span className="fs-12">Chef</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">person_add</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-3.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>James Zathila</h6>
                                            <span className="fs-12">Delivery Manager</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">person_add</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-4.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>John Doe</h6>
                                            <span className="fs-12">Head Chef</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-5.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>Khadiza Rehna</h6>
                                            <span className="fs-12">Manager</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">person_add</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-6.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>Peter Amber</h6>
                                            <span className="fs-12">Content Writer</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button>
                                    </li>
                                    <li className="ms-list-item media">
                                        <img src="assets/img/costic/customer-7.jpg" className="ms-img-small ms-img-round" alt="people" />
                                        <div className="media-body mt-1">
                                            <h6>Helen Southern</h6>
                                            <span className="fs-12">Food Tester</span>
                                        </div>
                                        <button type="button" className="ms-btn-icon btn-success" name="button"><i className="material-icons">check</i> </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* User Profile Widget */}
                    <div className="col-xl-4 col-md-12">
                        <div className="ms-card ms-widget ms-profile-widget ms-card-fh">
                            <div className="ms-card-img">
                                <img src="assets/img/costic/banner-1000x370.jpg" alt="card_img" />
                            </div>
                            <img src="assets/img/costic/customer-10.jpg" className="ms-img-large ms-img-round ms-user-img" alt="people" />
                            <div className="ms-card-body">
                                <h2>Anny Farisha</h2>
                                <span>Quality Control Manager</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                <button type="button" className="btn btn-gradient-primary" name="button"><i className="material-icons">person_add</i> Follow</button>
                                <ul className="ms-profile-stats">
                                    <li>
                                        <h3 className="ms-count">5790</h3>
                                        <span>Followers</span>
                                    </li>
                                    <li>
                                        <h3 className="ms-count">4.8</h3>
                                        <span>User Rating</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Identifiers */}
                    <div className="col-md-4">
                        <div className="ms-panel ms-widget ms-identifier-widget bg-danger">
                            <div className="ms-panel-header header-mini">
                                <h6>Danger</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="text-center">
                                    <i className="flaticon-alert-1" />
                                    <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ms-panel ms-widget ms-identifier-widget bg-warning">
                            <div className="ms-panel-header header-mini">
                                <h6>Warning</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="text-center">
                                    <i className="flaticon-alert" />
                                    <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ms-panel ms-widget ms-identifier-widget bg-info">
                            <div className="ms-panel-header header-mini">
                                <h6>Info</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="text-center">
                                    <i className="flaticon-information" />
                                    <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
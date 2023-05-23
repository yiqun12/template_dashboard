import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { OverlayTrigger, Tooltip, Tab, Nav, Dropdown, NavLink } from "react-bootstrap";

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
)
class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    {/* Chat Sidebar */}
                    <div className="col-xl-4 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body py-3 px-0">
                                <div className="ms-chat-container">
                                    <div className="ms-chat-header px-3">
                                        <div className="ms-chat-user-container media clearfix">
                                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-chat-user-info mt-1">
                                                <h6>John Doe</h6>
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
                                                <input type="search" className="ms-form-input w-100" name="search" placeholder="Search for People and Groups" /> <i className="flaticon-search text-disabled" />
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
                                                            <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center"> <span className="msg-count">3</span>
                                                                <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">2 Hours ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
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
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">3 Hours ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat selected ms-deletable p-3 media clearfix">
                                                            <div className="ms-chat-status ms-status-offline ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">12 Hours ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                            <div className="ms-chat-status ms-status-busy ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">Yesterday</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                            <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>  <span className="ms-chat-time">3 Days ago</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <Link to="/chat" className="ms-hoverable-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="material-icons">more_vert</i>
                                                                </Link>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li className="ms-dropdown-list">
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Archive</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Pin</span>
                                                                            </div>
                                                                        </Link>
                                                                        <Link className="media p-2" to="/chat">
                                                                            <div className="media-body"> <span>Delete</span>
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
                                                                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-2.jpg" alt="member" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-3.jpg" alt="member" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-4.jpg" alt="member" />
                                                                    </li>
                                                                    <li className="ms-group-count">+ 12 more</li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-8.jpg" alt="member" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-9.jpg" alt="member" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                                <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-1.jpg" alt="member" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-3.jpg" alt="member" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="assets/img/costic/customer-2.jpg" alt="member" />
                                                                    </li>
                                                                    <li className="ms-group-count">+ 4 more</li>
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
                                                                <img src="assets/img/costic/customer-10.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-9.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                                            </div>
                                                        </li>
                                                        <li className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                            <div className="ms-chat-img mr-3 align-self-center">
                                                                <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                                            </div>
                                                            <div className="media-body ms-chat-user-info mt-1">
                                                                <h6>John Doe</h6>
                                                                <Link to="/chat" className="ms-chat-time"> <i className="flaticon-chat" />
                                                                </Link>
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
                    {/* Chat Body */}
                    <div className="col-xl-8 col-md-12">
                        <div className="ms-panel ms-chat-conversations ms-chat-page ms-widget">
                            <div className="ms-panel-header">
                                <div className="ms-chat-header justify-content-between">
                                    <div className="ms-chat-user-container media clearfix">
                                        <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                            <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body ms-chat-user-info mt-1">
                                            <h6>John Doe</h6>
                                            <span className="text-disabled fs-12">
                                                Active Now
                </span>
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
                                        <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                        </div>
                                        <p className="ms-chat-time">10:33 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                        </div>
                                        <p className="ms-chat-time">10:33 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget orci ex.</p>
                                        </div>
                                        <p className="ms-chat-time">10:36 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <p className="ms-chat-time">10:41 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        </div>
                                        <p className="ms-chat-time">10:44 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-incoming media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                        </div>
                                        <p className="ms-chat-time">11:01 pm</p>
                                    </div>
                                </div>
                            </Scrollbar>
                            <div className="ms-panel-footer pt-0">
                                <div className="ms-chat-textbox">
                                    <ul className="ms-list-flex mb-0">
                                        <li className="ms-chat-vn"><i className="material-icons">mic</i>
                                        </li>
                                        <li className="ms-chat-input">
                                            <input type="text" name="msg" placeholder="Enter Message" />
                                        </li>
                                        <li>
                                            <ul className="ms-chat-text-controls ms-list-flex">
                                                <li> <i className="material-icons">tag_faces</i>
                                                </li>
                                                <li> <i className="material-icons">attach_file</i>
                                                </li>
                                                <li> <i className="material-icons">camera_alt</i>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
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
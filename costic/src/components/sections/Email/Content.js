import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Dropdown, NavLink } from "react-bootstrap";
import $ from 'jquery';

class Content extends Component {
    addpinned = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-email');
        $(parentTask).toggleClass('pinned');
    }
    componentDidMount() {
        function emailCheckAll() {
            $(".ms-email-check-all").on('click', function () {
                $(".ms-email input").not(this).prop('checked', this.checked);
            });
        }
        emailCheckAll();
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="ms-panel ms-email-panel">
                    <div className="ms-panel-body p-0">
                        <div className="ms-email-aside">
                            <Link to="/email" className="btn btn-primary w-100 mt-0 has-icon"> <i className="flaticon-pencil" /> Compose Email</Link>
                            <ul className="ms-list ms-email-list">
                                <li className="ms-list-item ms-email-label">Main</li>
                                <li className="ms-list-item ms-active-email">
                                    <Link to="/email"> <i className="material-icons ms-has-notification">mail</i> Inbox <span>32</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">flag</i> Flagged <span>12</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">chat</i> Spam <span>17</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">drafts</i> Drafts <span>22</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">send</i> Sent <span>51</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">delete</i> Trash <span>33</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="ms-list ms-email-list">
                                <li className="ms-list-item ms-email-label">Folders</li>
                                <li className="ms-list-item"> <Link to="/email"><i className="material-icons">folder</i> Social Media <span>123</span> </Link>
                                </li>
                                <li className="ms-list-item"> <Link to="/email"><i className="material-icons">folder</i> Promotions <span>175</span> </Link>
                                </li>
                                <li className="ms-list-item"> <Link to="/email"><i className="material-icons">folder</i> Updates <span>12</span> </Link>
                                </li>
                            </ul>
                            <ul className="ms-list ms-email-list bb-0">
                                <li className="ms-list-item ms-email-label">Others</li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">local_phone</i> Phone Calls <span>2</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">contacts</i> Contacts <span>233</span>
                                    </Link>
                                </li>
                                <li className="ms-list-item">
                                    <Link to="/email"> <i className="material-icons">group</i> Groups <span>8</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ms-email-config">
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <p className="mb-0">54.27 GB (25%) of 150 GB used</p> <Link to="/email">Manage Storage</Link>
                            </div>
                        </div>
                        {/* Email Main */}
                        <div className="ms-email-main">
                            <div className="ms-panel-header">
                                <h6>Inbox</h6>
                                <p>You have 17 Unread Messages</p>
                                <ul className="ms-email-pagination">
                                    <li>50-100 of 985</li>
                                    <li className="ms-email-pagination-item">
                                        <Link to="/email" className="ms-email-pagination-link"> <i className="material-icons">keyboard_arrow_left</i>
                                        </Link>
                                    </li>
                                    <li className="ms-email-pagination-item ">
                                        <Link to="/email" className="ms-email-pagination-link"> <i className="material-icons">keyboard_arrow_right</i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-email-header">
                                <ul className="ms-email-options">
                                    <li>
                                        <label className="ms-checkbox-wrap">
                                            <input type="checkbox" className="ms-email-check-all" defaultValue /> <i className="ms-checkbox-check" />
                                        </label>
                                        <Dropdown className="custom-dropdown">
                                            <Dropdown.Toggle as={NavLink} className="text-disabled p-0" >Select</Dropdown.Toggle>
                                            <Dropdown.Menu className="border-0 p-0">
                                                <ul className="dropdown-menu show">
                                                    <li className="ms-dropdown-list">
                                                        <Link className="media p-2" to="/email">
                                                            <div className="media-body"> <span>Mark as read</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="/email">
                                                            <div className="media-body"> <span>Flag</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="/email">
                                                            <div className="media-body"> <span>Delete</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="/email">
                                                            <div className="media-body"> <span>Archive</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </li>
                                </ul>
                                <ul className="ms-email-options">
                                    <li>
                                        <Link to="/email" className="text-disabled"> <i className="material-icons">refresh</i> Refresh</Link>
                                    </li>
                                    <li>
                                        <Link to="/email" className="text-disabled"> <i className="material-icons">local_offer</i> Tags</Link>
                                    </li>
                                    <li>
                                        <Link to="/email" className="text-disabled"> <i className="material-icons">folder</i> Folders</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Email Content */}
                            <div className="ms-email-content">
                                <Scrollbar className="ms-scrollable">
                                    <ul>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email pinned clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time"> <Link to="/email"><i className="material-icons">attachment</i></Link> 2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-4.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-5.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-6.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email pinned clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-7.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-8.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                        <li className="media ms-email pinned clearfix">
                                            <div className="ms-email-controls">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                                </label> <i className="material-icons ms-pin-email" onClick={this.addpinned}>flag</i>
                                            </div>
                                            <div className="ms-email-img mr-3 ">
                                                <img src="assets/img/costic/customer-9.jpg" className="ms-img-round" alt="people" />
                                            </div>
                                            <div className="media-body ms-email-details"> <span className="ms-email-sender">John Doe</span>
                                                <h6 className="ms-email-subject">[WordPress] New Comment</h6>  <span className="ms-email-time">2 Hours ago</span>
                                                <p className="ms-email-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                                            </div>
                                            <Dropdown className="custom-dropdown">
                                                <Dropdown.Toggle as={NavLink} className="text-disabled p-0 ms-hoverable-dropdown hide-after" ><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                <Dropdown.Menu className="border-0 p-0">
                                                    <ul className="dropdown-menu dropdown-menu-right show">
                                                        <li className="ms-dropdown-list">
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Mark as read</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2 ms-pin-email" to="/email">
                                                                <div className="media-body"> <span>Flag</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Archive</span>
                                                                </div>
                                                            </Link>
                                                            <Link className="media p-2" to="/email">
                                                                <div className="media-body"> <span>Delete</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                </Scrollbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
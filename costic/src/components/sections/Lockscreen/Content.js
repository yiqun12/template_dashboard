import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

class Content extends Component {
    render() {
        return (
            <div className="ms-body ms-primary-theme">
                <div className="ms-lock-screen-weather">
                    <p>38°</p>
                    <p>San Francisco, CA</p>
                </div>
                <ul className="ms-lock-screen-nav">
                    <li className="ms-nav-item dropdown">
                        <Dropdown className="custom-dropdown ms-nav-item ">
                            <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0" ><i className="material-icons">email</i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
                                <div className="dropdown-menu-header">
                                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
                                </div>
                                <div className="dropdown-divider" />
                                <Scrollbar className="ms-scrollable ms-dropdown-list">
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/people/people-3.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <span>Hey man, looking forward to your new project.</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/people/people-5.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <span>Dear John, I was told you bought Costic! Send me your feedback</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/people/people-3.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body">
                                            <span>How many people are we inviting to the dashboard?</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                                        </div>
                                    </Link>
                                </Scrollbar><div className="dropdown-divider" />
                                <div className="dropdown-menu-footer text-center">
                                    <Link to="/email">Go to Inbox</Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="ms-nav-item dropdown">
                        <Dropdown className="custom-dropdown ms-nav-item ">
                            <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0" ><i className="material-icons">notifications</i></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                                <div className="dropdown-menu-header">
                                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
                                </div>
                                <div className="dropdown-divider" />
                                <Scrollbar className="ms-scrollable ms-dropdown-list">
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>12 ways to improve your crypto dashboard</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>You have newly registered users</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>Your account was logged in from an unauthorized IP</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>An application form has been submitted</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                                        </div>
                                    </Link>
                                </Scrollbar><div className="dropdown-divider" />
                                <div className="dropdown-menu-footer text-center">
                                    <Link to="#">View all Notifications</Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                {/* Main Content */}
                <main className="body-content ms-lock-screen">
                    {/* Body Content Wrapper */}
                    <div className="ms-content-wrapper">
                        <img className="ms-user-img ms-img-round ms-lock-screen-user" src="assets/img/costic/customer-3.jpg" alt="people" />
                        <h1>John Doe</h1>
                        <form method="post">
                            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                <input type="password" className="ms-form-input" name="pin" placeholder="Enter Pin" />
                                <i className="material-icons">security</i>
                            </div>
                            <Link to="/" className="btn bg-black w-100 text-white">Unlock</Link>
                        </form>
                    </div>
                </main>
                <div className="ms-lock-screen-time">
                    <p>04:25</p>
                    <p>Friday, January 9</p>
                </div>
            </div>

        );
    }
}

export default Content;
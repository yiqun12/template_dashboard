import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Recentorder from './Recentorder';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";
import Chart from './Chart';
import Trendingorder from './Trendingorder';
import Orderchart from './Orderchart';
import Restaurantlisting from './Restaurantlisting';

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
class Homecontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Welcome, Anny</h1>
                    </div>
                    <div className="col-12">
                        <Chart />
                    </div>
                    {/* Recent Orders Requested */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center align-left">
                                        <h6>Recent Orders Requested</h6>
                                    </div>
                                    <button type="button" className="btn btn-primary">View All</button>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Food Item</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/pizza.jpg" alt="people" /> Pizza </td>
                                                <td>$19.99</td>
                                                <td>67384917</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/french-fries.jpg" alt="people" /> French Fries </td>
                                                <td>$14.59</td>
                                                <td>789393819</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/cereals.jpg" alt="people" /> Multigrain Hot Cereal </td>
                                                <td>$25.22</td>
                                                <td>137893137</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/egg-sandwich.jpg" alt="people" /> Fried Egg Sandwich </td>
                                                <td>$11.23</td>
                                                <td>235193138</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header new">
                                <h6>Monthly Revenue</h6>
                                <select className="form-control new" id="exampleSelect">
                                    <option value={1}>January</option>
                                    <option value={2}>February</option>
                                    <option value={3}>March </option>
                                    <option value={4}>April</option>
                                    <option value={5}>May</option>
                                    <option value={1}>June</option>
                                    <option value={2}>July</option>
                                    <option value={3}>August</option>
                                    <option value={4}>September</option>
                                    <option value={5}>October</option>
                                    <option value={4}>November</option>
                                    <option value={5}>December</option>
                                </select>
                            </div>
                            <div className="ms-panel-body">
                                <span className="progress-label"> <strong>Week 1</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 2</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 3</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 4</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Food Orders */}
                    <div className="col-md-12">
                        <Trendingorder />
                    </div>
                    {/* END/Food Orders */}
                    {/* Recent Orders Requested */}
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-header-text">
                                        <h6>Order Timing Chart</h6>
                                    </div>
                                </div>
                            </div>
                            <Orderchart />
                        </div>
                    </div>
                    {/* Favourite Products */}
                    <div className="col-xl-5 col-md-12">
                        <div className="ms-panel ms-widget ms-crypto-widget">
                            <div className="ms-panel-header">
                                <h6>Favourite charts</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <Tab.Container defaultActiveKey="mon">
                                    <Nav variant="tabs" className="nav nav-tabs nav-justified has-gap px-4 pt-4">
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
                        {/* Favourite Products */}
                        {/* Total Earnings */}
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Total Earnings</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="ms-quick-stats">
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-star" />
                                        <p className="ms-text-dark">$8,033</p>
                                        <span>Today</span>
                                    </div>
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-university" />
                                        <p className="ms-text-dark">$3,039</p>
                                        <span>Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Total Earnings */}
                    {/* Recent Placed Orders< */}
                    <div className="col-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Recently Placed Orders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Recentorder />
                            </div>
                        </div>
                    </div>
                    {/* Recent Orders< */}
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>New Resturant Listings</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Restaurantlisting />
                            </div>
                        </div>
                    </div>
                    {/* Recent Support Tickets */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center align-left">
                                        <h6>Recent Support Tickets</h6>
                                    </div>
                                    <Link to="#" className="btn btn-primary"> View All</Link>
                                </div>
                            </div>
                            <div className="ms-panel-body p-0">
                                <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                                    <li className="ms-list-item">
                                        <Link to="#" className="media clearfix">
                                            <img src="assets/img/costic/customer-4.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                            <div className="media-body">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                                                    <span className="badge badge-success"> Open </span>
                                                </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24, 2022</span>
                                                <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <div className="ms-feed-controls"> <span>
                                                        <i className="material-icons">chat</i> 16
                      </span>
                                                        <span>
                                                            <i className="material-icons">attachment</i> 3
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ms-list-item">
                                        <Link to="#" className="media clearfix">
                                            <img src="assets/img/costic/customer-1.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                            <div className="media-body">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                                                    <span className="badge badge-success"> Open </span>
                                                </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24, 2022</span>
                                                <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <div className="ms-feed-controls"> <span>
                                                        <i className="material-icons">chat</i> 11
                      </span>
                                                        <span>
                                                            <i className="material-icons">attachment</i> 1
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ms-list-item">
                                        <Link to="#" className="media clearfix">
                                            <img src="assets/img/costic/customer-7.jpg" className="ms-img-round ms-img-small" alt="This is another feature" />
                                            <div className="media-body">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="ms-feed-user mb-0">Lorem ipsum dolor</h6>
                                                    <span className="badge badge-danger"> Closed </span>
                                                </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> February 24, 2022</span>
                                                <p className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...</p>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <div className="ms-feed-controls"> <span>
                                                        <i className="material-icons">chat</i> 21
                      </span>
                                                        <span>
                                                            <i className="material-icons">attachment</i> 5
                      </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Recent Support Tickets */}
                    {/* client chat */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh ms-widget ms-chat-conversations">
                            <div className="ms-panel-header">
                                <div className="ms-chat-header justify-content-between">
                                    <div className="ms-chat-user-container media clearfix">
                                        <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                            <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body ms-chat-user-info mt-1">
                                            <h6>Heather Brown</h6>
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
                                        <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <p className="ms-chat-time">10:33 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-incoming media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>I'm doing great, thanks for asking</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        </div>
                                        <p className="ms-chat-time">11:01 pm</p>
                                    </div>
                                </div>
                                <div className="ms-chat-bubble ms-chat-message ms-chat-outgoing media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img">
                                        <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <div className="ms-chat-text">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                                            <p>There are many variations of passages of Lorem Ipsum available</p>
                                        </div>
                                        <p className="ms-chat-time">11:03 pm</p>
                                    </div>
                                </div>
                                <div className="ms-panel-footer">
                                    <div className="ms-chat-textbox">
                                        <ul className="ms-list-flex mb-0">
                                            <li className="ms-chat-vn"><i className="material-icons">mic</i>
                                            </li>
                                            <li className="ms-chat-input">
                                                <input type="text" name="msg" placeholder="Enter Message" />
                                            </li>
                                            <li className="ms-chat-text-controls ms-list-flex"> <span> <i className="material-icons">tag_faces</i> </span>
                                                <span> <i className="material-icons">attach_file</i> </span>
                                                <span> <i className="material-icons">camera_alt</i> </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Scrollbar>
                        </div>
                    </div>
                    {/* client chat */}
                </div>
            </div>

        );
    }
}

export default Homecontent;
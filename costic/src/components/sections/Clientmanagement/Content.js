import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Pie as PieChart } from 'react-chartjs-2';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Usertraffic from './Usertraffic';
import Userpurchase from './Userpurchase';

import country1 from '../../../assets/img/costic/country-1.jpg';
import country2 from '../../../assets/img/costic/country-2.jpg';
import country3 from '../../../assets/img/costic/country-3.jpg';
import country4 from '../../../assets/img/costic/country-4.jpg';
import img1 from '../../../assets/img/costic/customer-4.jpg';
import img2 from '../../../assets/img/costic/customer-1.jpg';
import img3 from '../../../assets/img/costic/customer-7.jpg';

// Pie chart
function chartData1() {
    return {
        labels: ["Hunger House", "Food Lounge", "Delizious", "Red Resturant", "Hunger Lounge"],
        datasets: [{
            label: "Users (thousands)",
            backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [725, 890, 729, 316, 275]
        }]
    }
}
const options = {
    title: {
        display: false,
        text: 'Users By Country'
    },
    legend: {
        display: false
    },
}

const topboxes = [
    {
        url: "/client-management",
        msgcount: "6",
        icon: "folder",
        title: "My Products",
        para: "Manage Products",
    },
    {
        url: "/client-management",
        msgcount: "5",
        icon: "people",
        title: "My Clients",
        para: "Manage Users",
    },
    {
        url: "/client-management",
        msgcount: "3",
        icon: "help",
        title: "Support Tickets",
        para: "View Tickets",
    },
    {
        url: "/client-management",
        msgcount: "2",
        icon: "graphic_eq",
        title: "Management",
        para: "Manage Product",
    },
]

const usercountrybased = [
    {
        photo: country1,
        user: "725",
        percentage: "17.24%",
        exits: "234",
    },
    {
        photo: country2,
        user: "890",
        percentage: "12.90%",
        exits: "425",
    },
    {
        photo: country3,
        user: "729",
        percentage: "20.75%",
        exits: "598",
    },
    {
        photo: country4,
        user: "316",
        percentage: "32.09%",
        exits: "112",
    },
]

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

const recenttickets = [
    {
        photo: img1,
        title: "Lorem ipsum dolor",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        comment: "16",
        attachment: "3",
        ticketstatus: "open",
        ticketclass: "badge badge-success",
    },
    {
        photo: img2,
        title: "Lorem ipsum dolor",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        comment: "11",
        attachment: "1",
        ticketstatus: "open",
        ticketclass: "badge badge-success",
    },
    {
        photo: img3,
        title: "Lorem ipsum dolor",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        comment: "21",
        attachment: "5",
        ticketstatus: "closed",
        ticketclass: "badge badge-danger",
    },
]
class Content extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Welcome, Anny</h1>
                    </div>
                    {topboxes.map((item, i) => (
                        <div key={i} className="col-xl-3 col-md-6">
                            <Link to={item.url}>
                                <div className="ms-panel ms-panel-hoverable has-border ms-widget ms-has-new-msg ms-notification-widget"> <span className="msg-count">{item.msgcount}</span>
                                    <div className="ms-panel-body media"> <i className="material-icons">{item.icon}</i>
                                        <div className="media-body">
                                            <h6>{item.title}</h6>
                                            <span>{item.para}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* Users by country table */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-widget ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Users By Country</h6>
                                <p>Your user base based on country</p>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Country</th>
                                                <th scope="col">Users</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Exits</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usercountrybased.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">
                                                        <img src={item.photo} alt="flags" />
                                                    </th>
                                                    <td>{item.user}</td>
                                                    <td>{item.percentage}</td>
                                                    <td>{item.exits}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Users Pie Chart */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Users</h6>
                                <p>Users by country visualized</p>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-4 col-md-4">
                                        <div className="ms-graph-labels column-direction">
                                            <div className="ms-chart-no-label"> <span className="bg-success" />
                                                <p>$9,348,319</p>
                                            </div>
                                            <div className="ms-chart-no-label"> <span className="bg-primary" />
                                                <p>$4,344,316</p>
                                            </div>
                                            <div className="ms-chart-no-label"> <span className="bg-warning" />
                                                <p>$518,513</p>
                                            </div>
                                            <div className="ms-chart-no-label"> <span className="bg-danger" />
                                                <p>$348,319</p>
                                            </div>
                                            <div className="ms-chart-no-label"> <span className="bg-secondary" />
                                                <p>$3,416,139</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-md-8">
                                        <PieChart data={this.state.data1} options={options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* User Traffic Line Chart */}
                    <div className="col-xl-7 col-md-12">
                        <Usertraffic />
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <Userpurchase />
                    </div>
                    {/* Chat */}
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
                                            <li> <i className="material-icons">local_phone</i>
                                            </li>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={videotip}>
                                            <li> <i className="material-icons">videocam</i>
                                            </li>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={invitetip}>
                                            <li> <i className="material-icons">person_add</i>
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
                    {/* Recent Support Tickets */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6>Recent Support Tickets</h6>
                                        <p>Some of the recent support tickets</p>
                                    </div> <Link to="/client-management" className="btn btn-primary"> View All</Link>
                                </div>
                            </div>
                            <div className="ms-panel-body p-0">
                                <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                                    {recenttickets.map((item, i) => (
                                        <li key={i} className="ms-list-item">
                                            <Link to="/client-management" className="media clearfix">
                                                <img src={item.photo} className="ms-img-round ms-img-small" alt="This is another feature" />
                                                <div className="media-body">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="ms-feed-user mb-0">{item.title}</h6>
                                                        <span className={item.ticketclass}> {item.ticketstatus} </span>
                                                    </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> {item.date}</span>
                                                    <p className="d-block">{item.para}</p>
                                                    <div className="d-flex justify-content-between align-items-end">
                                                        <div className="ms-feed-controls"> <span>
                                                            <i className="material-icons">chat</i> {item.comment}
                                                    </span>
                                                            <span>
                                                                <i className="material-icons">attachment</i> {item.attachment}
                                                    </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
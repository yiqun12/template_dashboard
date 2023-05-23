import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line as LineChart } from 'react-chartjs-2';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Dropdown, NavLink } from 'react-bootstrap';

import img1 from '../../../assets/img/costic/customer-1.jpg';
import img2 from '../../../assets/img/costic/customer-2.jpg';
import img3 from '../../../assets/img/costic/customer-3.jpg';
import img4 from '../../../assets/img/costic/customer-4.jpg';
import img5 from '../../../assets/img/costic/customer-5.jpg';

import food1 from '../../../assets/img/costic/food-2.jpg';
import food2 from '../../../assets/img/costic/food-3.jpg';
import food3 from '../../../assets/img/costic/food-1.jpg';

// Line chart
var data_1 = [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800];
var data_2 = [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800];
var labels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
function chartData1() {
    return {
        labels: labels,
        datasets: [
            {
                label: "Traffic",
                borderColor: "#ff0018",
                pointBorderWidth: 9,
                pointRadius: 9,
                pointBorderColor: 'transparent',
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: '#ff0018',
                pointBackgroundColor: 'transparent',
                fill: true,
                backgroundColor: "rgba(53,127,250,0.4)",
                borderWidth: 2,
                data: data_1
            },
            {
                label: "Sales",
                borderColor: "#ec4e3f",
                pointBorderWidth: 9,
                pointRadius: 9,
                pointBorderColor: 'transparent',
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: '#ec4e3f',
                pointBackgroundColor: 'transparent',
                fill: true,
                backgroundColor: "rgba(236, 78, 63,0.4)",
                borderWidth: 2,
                data: data_2
            }
        ]
    }
}
const options = {
    elements: {
        line: {
            tension: 0
        }
    },
    tooltips: {
        titleFontColor: '#3a3952',
        bodyFontFamily: 'Roboto',
        backgroundColor: '#FFF',
        bodyFontColor: '#878793',
        bodyFontSize: 14,
        displayColors: false,
        bodySpacing: 10,
        intersect: false,
        bodyFontStyle: 'bold',
        xPadding: 15,
        yPadding: 15,
        mode: 'index'
    },
    legend: {
        display: false,
        position: "top"
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 200,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                beginAtZero: true,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}

const recentbuyers = [
    {
        photo: img1,
        name: "Chihoo Hwang",
        service: "Wordpress Template",
        serviceid: "67384917",
    },
    {
        photo: img2,
        name: "Ajay Suryavanash",
        service: "Business Card",
        serviceid: "789393819",
    },
    {
        photo: img3,
        name: "John Doe",
        service: "App Customization",
        serviceid: "137893137",
    },
    {
        photo: img4,
        name: "Alesdro Guitto",
        service: "Dashboard Design",
        serviceid: "235193138",
    },
    {
        photo: img5,
        name: "Manbir Sahwny",
        service: "Theme Development",
        serviceid: "19938917",
    },
]

const latestproject = [
    {
        userimg: img1,
        foodimg: food1,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a project name",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        likes: "982",
        comments: "785",
    },
    {
        userimg: img4,
        foodimg: food2,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a project name",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        likes: "982",
        comments: "785",
    },
    {
        userimg: img5,
        foodimg: food3,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a project name",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        likes: "982",
        comments: "785",
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
                    <div className="col-xl-3 col-md-6">
                        <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                            <div className="ms-card-body media">
                                <div className="media-body">
                                    <h6>Total Subscriptions</h6>
                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 4567</p>
                                    <p className="fs-12">48% From Last 24 Hours</p>
                                </div>
                            </div> <i className="flaticon-statistics" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                            <div className="ms-card-body media">
                                <div className="media-body">
                                    <h6>Budgets</h6>
                                    <p className="ms-card-change">$80,950</p>
                                    <p className="fs-12">2% Decreased from last budget</p>
                                </div>
                            </div> <i className="flaticon-stats" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                            <div className="ms-card-body media">
                                <div className="media-body">
                                    <h6>Total Users</h6>
                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 4567</p>
                                    <p className="fs-12">48% From Last 24 Hours</p>
                                </div>
                            </div> <i className="flaticon-user" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                            <div className="ms-card-body media">
                                <div className="media-body">
                                    <h6>Conversions</h6>
                                    <p className="ms-card-change">$80,950</p>
                                    <p className="fs-12">2% Decreased from last budget</p>
                                </div>
                            </div> <i className="flaticon-reuse" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Recent Buyers</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover thead-light">
                                        <thead>
                                            <tr>
                                                <th scope="col">User</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentbuyers.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="ms-table-f-w">
                                                        <img src={item.photo} alt="people" />{item.name}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.serviceid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Project Timeline</h6>
                            </div>
                            <div className="ms-panel-body">
                                <ul className="ms-activity-log">
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-success"> <i className="flaticon-tick-inside-circle" />
                                        </div>
                                        <h6>Lorem ipsum dolor sit</h6>
                                        <span> <i className="material-icons">event</i>1 January, 2018</span>
                                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                    </li>
                                    <li>
                                        <div className="ms-btn-icon btn-pill icon btn-danger"> <i className="flaticon-alert-1" />
                                        </div>
                                        <h6>Lorem ipsum dolor sit</h6>
                                        <span> <i className="material-icons">event</i>1 March, 2022</span>
                                        <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header header-mini">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6>Project Sales</h6>
                                        <p>Monitor how much sales your product does</p>
                                    </div>
                                    <ButtonToolbar>
                                        <ToggleButtonGroup className="ms-graph-metrics" type="radio" name="options" defaultValue={1}>
                                            <ToggleButton variant="sm btn-outline-primary day" value={1}>Day</ToggleButton>
                                            <ToggleButton variant="sm btn-outline-primary month" value={2}>Month</ToggleButton>
                                            <ToggleButton variant="sm btn-outline-primary year" value={3}>Year</ToggleButton>
                                        </ToggleButtonGroup>
                                    </ButtonToolbar>
                                </div>
                                <div className="d-flex justify-content-between ms-graph-meta">
                                    <div className="ms-graph-labels"> <span className="ms-graph-decrease" />
                                        <p>Traffic</p> <span className="ms-graph-regular" />
                                        <p>Sales</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <LineChart data={this.state.data1} options={options} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>most sellings projects</h6>
                            </div>
                            <div className="ms-panel-body"> <span className="progress-label">HTML &amp; CSS Projects</span><span className="progress-status">83%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                                </div> <span className="progress-label">Wordpress Projects</span><span className="progress-status">50%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div> <span className="progress-label">PSD Projects</span><span className="progress-status">75%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div> <span className="progress-label">Code Snippets</span><span className="progress-status">92%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Top Sales</h6>
                                <p>Your highest selling projects</p>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="ms-quick-stats">
                                    <div className="ms-stats-grid">
                                        <p className="ms-text-success">+47.18%</p>
                                        <p className="ms-text-dark">8,033</p> <span>Admin Dashboard</span>
                                    </div>
                                    <div className="ms-stats-grid">
                                        <p className="ms-text-success">+17.24%</p>
                                        <p className="ms-text-dark">6,039</p> <span>Wordpress Theme</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Latest Projects</h6>
                                <p>Some of your latest works</p>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    {latestproject.map((item, i) => (
                                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="ms-card">
                                                <div className="ms-card-body">
                                                    <div className="media fs-14">
                                                        <div className="mr-2 align-self-center">
                                                            <img src={item.userimg} className="ms-img-round" alt="people" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6>{item.name} </h6>
                                                            <Dropdown className="float-right">
                                                                <Dropdown.Toggle as={NavLink} className="p-0">
                                                                    <i className="material-icons">more_vert</i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <ul className="dropdown-menu-right mb-0">
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Comment</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Share</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Favorite</span>
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <p className="fs-12 my-1 text-disabled">{item.time}</p>
                                                        </div>
                                                    </div>
                                                    <h6>{item.title}</h6>
                                                    <p>{item.para}</p>
                                                </div>
                                                <div className="ms-card-img">
                                                    <img src={item.foodimg} alt="card_img" />
                                                </div>
                                                <div className="ms-card-footer text-disabled d-flex">
                                                    <div className="ms-card-options"> <i className="material-icons">favorite</i> {item.likes}</div>
                                                    <div className="ms-card-options"> <i className="material-icons">comment</i> {item.comments}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Line as LineChart } from 'react-chartjs-2';
import { Dropdown, NavLink } from "react-bootstrap";
// Pie chart
function chartData1() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: "Data",
            borderColor: "#07be6e",
            pointBorderColor: "#07be6e",
            pointBackgroundColor: "#07be6e",
            pointHoverBackgroundColor: "#07be6e",
            pointHoverBorderColor: "#07be6e",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(7, 190, 110,0.3)",
            borderWidth: 2,
            data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
        }]
    }
}
function chartData2() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
            label: "Data",
            borderColor: "#07be6e",
            pointBorderColor: "#07be6e",
            pointBackgroundColor: "#07be6e",
            pointHoverBackgroundColor: "#07be6e",
            pointHoverBorderColor: "#07be6e",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(7, 190, 110,0.3)",
            borderWidth: 2,
            data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
        }]
    }
}
const options = {
    elements: {
        line: {
            tension: 0
        }
    },
    legend: {
        display: false,
        position: "bottom"
    },
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false,
        }]
    }
}
class Userpurchase extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            data2: chartData2(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-panel ms-panel-fh ms-facebook-engagements">
                <div className="ms-panel-header">
                    <h6>User Purchases</h6>
                    <p>Track which purchases by month</p>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="ms-facebook-page-selection">
                        <p className="ms-text-dark">March 25, 2022 to April 02, 2022</p> <span>Product: </span>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle as={NavLink} className="p-0" >Product Name here</Dropdown.Toggle>
                            <Dropdown.Menu className="border-0 p-0">
                                <ul className="dropdown-menu show">
                                    <li className="ms-dropdown-list">
                                        <Link className="media p-2" to="#">
                                            <div className="media-body">
                                                <span>Product 1</span>
                                            </div>
                                        </Link>
                                        <Link className="media p-2" to="#">
                                            <div className="media-body">
                                                <span>Product 2</span>
                                            </div>
                                        </Link>
                                        <Link className="media p-2" to="#">
                                            <div className="media-body">
                                                <span>Product 3</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <ul className="ms-list clearfix">
                        <li className="ms-list-item">
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="ms-graph-meta">
                                    <h2>January, 2022</h2>
                                    <p className="ms-text-dark">45.07%</p>
                                    <p className="ms-text-success">+28.44%</p>
                                    <p>VS 66.68% (Prev)</p>
                                </div>
                                <div className="ms-graph-canvas">
                                    <LineChart data={this.state.data1} options={options} />
                                </div>
                            </div>
                        </li>
                        <li className="ms-list-item">
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="ms-graph-meta">
                                    <h2>February, 2022</h2>
                                    <p className="ms-text-dark">9.07%</p>
                                    <p className="ms-text-danger">-2.31%</p>
                                    <p>VS 45.07% (Prev)</p>
                                </div>
                                <div className="ms-graph-canvas">
                                    <LineChart data={this.state.data2} options={options} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Userpurchase;
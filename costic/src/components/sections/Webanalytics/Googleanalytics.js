import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';

// Line chart
function chartData1() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
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
                data: [5,1,8,1,3,7,8,4,3,6,8,9,4,5,8,2,6,4,8,3]
            }
        ]
    }
}
function chartData2() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Data",
                borderColor: "#ec4e3f",
                pointBorderColor: "#ec4e3f",
                pointBackgroundColor: "#ec4e3f",
                pointHoverBackgroundColor: "#ec4e3f",
                pointHoverBorderColor: "#ec4e3f",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: "rgba(236, 78, 63,0.4)",
                borderWidth: 2,
                data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
            }
        ]
    }
}
function chartData3() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                label: "Data",
                borderColor: "#ec4e3f",
                pointBorderColor: "#ec4e3f",
                pointBackgroundColor: "#ec4e3f",
                pointHoverBackgroundColor: "#ec4e3f",
                pointHoverBorderColor: "#ec4e3f",
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: "rgba(236, 78, 63,0.4)",
                borderWidth: 2,
                data: [1, 6, 3, 8, 3, 4, 5, 1, 8, 5, 8, 4, 2, 4, 6, 8, 5, 3, 7, 5, 8]
            }
        ]
    }
}
function chartData4() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
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
            }
        ]
    }
}
function chartData5() {
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
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
class Googleanalytics extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            data2: chartData2(),
            data3: chartData3(),
            data4: chartData4(),
            data5: chartData5(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Google Analytics Website Performance</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <ul className="ms-list ms-website-performance clearfix">
                        <li className="ms-list-item">
                            <h4>Bounce Rate (Avg)</h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="website-performance-canvas">
                                    <LineChart data={this.state.data1} options={options} />
                                </div>
                                <div className="website-performance-meta">
                                    <p className="ms-text-dark">45.07%</p>
                                    <p className="ms-text-success">+28.44%</p>
                                    <p>VS 66.68% (Prev)</p>
                                </div>
                            </div>
                        </li>
                        <li className="ms-list-item">
                            <h4>Page Views (Avg)</h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="website-performance-canvas">
                                    <LineChart data={this.state.data2} options={options} />
                                </div>
                                <div className="website-performance-meta">
                                    <p className="ms-text-dark">4.30%</p>
                                    <p className="ms-text-danger">-28.44%</p>
                                    <p>VS 1.90% (Prev)</p>
                                </div>
                            </div>
                        </li>
                        <li className="ms-list-item">
                            <h4>New Sessions</h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="website-performance-canvas">
                                    <LineChart data={this.state.data3} options={options} />
                                </div>
                                <div className="website-performance-meta">
                                    <p className="ms-text-dark">5.75%</p>
                                    <p className="ms-text-danger">-2.41%</p>
                                    <p>VS 8.75% (Prev)</p>
                                </div>
                            </div>
                        </li>
                        <li className="ms-list-item">
                            <h4>Time on Site (Avg)</h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="website-performance-canvas">
                                    <LineChart data={this.state.data4} options={options} />
                                </div>
                                <div className="website-performance-meta">
                                    <p className="ms-text-dark">8m:55s</p>
                                    <p className="ms-text-success">+50.07%</p>
                                    <p>VS 66.88% (Prev)</p>
                                </div>
                            </div>
                        </li>
                        <li className="ms-list-item">
                            <h4>Site Impressions (Avg)</h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="website-performance-canvas">
                                    <LineChart data={this.state.data5} options={options} />
                                </div>
                                <div className="website-performance-meta">
                                    <p className="ms-text-dark">17.03%</p>
                                    <p className="ms-text-success">+15.03%</p>
                                    <p>VS 12.09% (Prev)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Googleanalytics;
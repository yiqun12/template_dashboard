import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// Bar chart 1
var data_1 = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
var data_2 = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
var labels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
function chartData1() {
    return {
        labels: labels,
        datasets: [{
            label: "Subscribers Gained",
            backgroundColor: '#ff0018',
            data: data_1
        }, {
            label: "Subscribers List",
            backgroundColor: '#ec4e3f',
            data: data_2
        }],
    }
}
const options = {
    legend: { display: false },
    title: {
        display: false,
    },
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true
        }]
    },
}

class Youtubess extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header header-mini">
                    <div className="d-flex justify-content-between">
                        <h6>Youtube Subscribers</h6>
                        <ButtonToolbar>
                            <ToggleButtonGroup className="ms-graph-metrics" type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="sm btn-outline-primary day" value={1}>Day</ToggleButton>
                                <ToggleButton variant="sm btn-outline-primary month" value={2}>Month</ToggleButton>
                                <ToggleButton variant="sm btn-outline-primary year" value={3}>Year</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div className="d-flex justify-content-between ms-graph-meta">
                        <ul className="ms-list-flex">
                            <li> <span>Total Subscribers</span>
                                <h3 className="ms-count">85,390</h3>
                            </li>
                            <li> <span>New Subscribers</span>
                                <h3 className="ms-count">19,038</h3>
                            </li>
                            <li> <span>Unsubscribed</span>
                                <h3 className="ms-count">3,785</h3>
                            </li>
                        </ul>
                        <div className="ms-graph-labels"> <span className="ms-graph-regular" />
                            <p>Gained</p> <span className="ms-graph-decrease" />
                            <p>Lost</p>
                        </div>
                    </div>
                </div>
                <div className="ms-panel-body">
                    <BarChart data={this.state.data1} options={options} />
                </div>
            </div>
        );
    }
}

export default Youtubess;
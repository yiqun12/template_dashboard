import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';
 
// Bar chart 1
var data_1 = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
var data_2 = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
var labels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
function chartData1() {
    return {
        labels: labels,
        datasets: [{
            label: "Repeat order",
            backgroundColor: '#ff0018',
            data: data_1
        }, {
            label: "New order",
            backgroundColor: '#000000',
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

class Orderchart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <div className="ms-panel-body pt-0">
                <div className="d-flex justify-content-between ms-graph-meta">
                    <ul className="ms-list-flex mt-3 mb-5">
                        <li>
                            <span>Total Orders</span>
                            <h3 className="ms-count">703,49</h3>
                        </li>
                        <li>
                            <span>New Orders</span>
                            <h3 className="ms-count">95,038</h3>
                        </li>
                        <li>
                            <span>Repeat Orders</span>
                            <h3 className="ms-count">28,387</h3>
                        </li>
                        <li>
                            <span>Cancel Orders</span>
                            <h3 className="ms-count">260</h3>
                        </li>
                    </ul>
                </div>
                <BarChart data={this.state.data1} options={options} />
            </div>
        );
    }
}

export default Orderchart;
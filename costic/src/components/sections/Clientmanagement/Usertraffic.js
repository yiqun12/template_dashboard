import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
// Pie chart
var data_1 = [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600];
var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
function chartData1() {
    return {
        labels: labels,
        datasets: [{
            label: "Users",
            borderColor: "#ff0018",
            pointBorderColor: "#ff0018",
            pointBackgroundColor: "#ff0018",
            pointHoverBackgroundColor: "#ff0018",
            pointHoverBorderColor: "#ff0018",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: true,
            backgroundColor: "rgba(53,127,250,0.4)",
            borderWidth: 1,
            data: data_1
        }]
    }
}
const options = {
    legend: {
        display: false,
        position: "bottom"
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
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
class Usertraffic extends Component {
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
            <div className="ms-panel-header">
                <h6>User Traffic</h6>
                <p>Track User Traffic</p>
            </div>
            <div className="ms-panel-body">
                <LineChart data={this.state.data1} options={options} />
            </div>
        </div>
    );
}
}

export default Usertraffic;
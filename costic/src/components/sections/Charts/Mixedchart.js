import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// Bar chart
function chartData1() {
    return {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false
        }, {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false
        }, {
            label: "Europe",
            type: "bar",
            backgroundColor: "#ff6c60",
            data: [408, 547, 675, 734],
        }, {
            label: "Africa",
            type: "bar",
            backgroundColor: "#f7b11b",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478]
        }
        ]
    }
}
const options = {
    title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
    },
    legend: { display: false }
}
class Mixedchart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <BarChart data={this.state.data1} options={options} />
        );
    }
}

export default Mixedchart;
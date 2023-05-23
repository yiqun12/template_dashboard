import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// Bar chart
function chartData1() {
    return {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
            {
                label: "Africa",
                backgroundColor: "#3e95cd",
                data: [133, 221, 783, 2478]
            }, {
                label: "Europe",
                backgroundColor: "#8e5ea2",
                data: [408, 547, 675, 734]
            }
        ]
    }
}
const options = {
    title: {
        display: true,
        text: 'Population growth (millions)'
    }
}
class Groupedbarchart extends Component {
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

export default Groupedbarchart;
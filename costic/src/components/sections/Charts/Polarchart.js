import React, { Component } from 'react';
import { Polar as PolarChart } from 'react-chartjs-2';

// Polar chart
function chartData1() {
    return {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
                data: [2478, 5267, 734, 784, 433]
            }
        ]
    }
}
const options = {
    title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
    }
}
class Polarchart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <PolarChart data={this.state.data1} options={options} />
        );
    }
}

export default Polarchart;
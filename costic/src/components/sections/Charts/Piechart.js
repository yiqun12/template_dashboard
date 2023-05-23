import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';

// Bar chart
function chartData1() {
    return {
        labels: ["Hunger House", "Food Lounge", "Delizious", "Red Resturant", "Hunger Lounge"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [2478, 5267, 734, 784, 433]
        }]
    }
}
const options = {
    title: {
        display: true,
        text: 'Predicted Resturant Ratings (millions) in 2050'
    }
}

class Piechart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <PieChart data={this.state.data1} options={options} />
        );
    }
}

export default Piechart;
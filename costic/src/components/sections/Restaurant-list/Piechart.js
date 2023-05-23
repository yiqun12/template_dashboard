import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';

// Line chart 1

function chartData1() {
    return {
        labels: ["Hunger House", "Food Lounge", "Delizious", "Red Resturant", "Hunger Lounge"],
        datasets: [{
            label: "Users (thousands)",
            backgroundColor: ["#ff6877", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [725, 890, 729, 316, 275]
        }]
    }
}
const options = {
    title: {
        display: false,
        text: 'Users By Country'
    },
    legend: {
        display: false
    },
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
            <div className="row">
                <div className="col-xl-4 mb-lg-20">
                    <div className="ms-graph-labels column-direction">
                        <div className="ms-chart-no-label">
                            <span className="bg-success" />
                            <p>$9,348,319</p>
                        </div>
                        <div className="ms-chart-no-label">
                            <span className="bg-primary" />
                            <p>$4,344,316</p>
                        </div>
                        <div className="ms-chart-no-label">
                            <span className="bg-warning" />
                            <p>$518,513</p>
                        </div>
                        <div className="ms-chart-no-label">
                            <span className="bg-danger" />
                            <p>$348,319</p>
                        </div>
                        <div className="ms-chart-no-label">
                            <span className="bg-secondary" />
                            <p>$3,416,139</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <PieChart data={this.state.data1} options={options} />
                </div>
            </div>
        );
    }
}

export default Piechart;
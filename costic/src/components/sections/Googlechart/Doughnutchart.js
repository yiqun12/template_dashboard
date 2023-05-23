import React, { Component } from 'react';
import Chart from "react-google-charts";

class Doughnutchart extends Component {
    render() {
        return (
            <Chart
                height={'350px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['label', 'value'],
                    ['Download Sales', 12],
                    ['In-Store Sales', 30],
                    ['Mail-Order Sales', 20],
                ]}
                options={{
                    legend: { position: 'none' },
                    // Just add this option
                    pieHole: 0.6,
                    colors: ['#0b62a4', '#3980b5', '#679dc6'],
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        );
    }
}

export default Doughnutchart;
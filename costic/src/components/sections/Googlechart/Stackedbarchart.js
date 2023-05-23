import React, { Component } from 'react';
import Chart from "react-google-charts";

class Stackedbarchart extends Component {
    render() {
        return (
            <Chart
                height={'350px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['X', 'Y', 'Z', 'A'],
                    ['2011 Q1', 3, 2, 3],
                    ['2011 Q2', 2, 0, 1],
                    ['2011 Q3', 0, 2, 4],
                    ['2011 Q4', 2, 4, 3],
                ]}
                options={{
                    isStacked: true,
                    legend: { position: 'none' },
                    colors: ['#0b62a4', '#7a92a3', '#4da74d'],
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        );
    }
}

export default Stackedbarchart;
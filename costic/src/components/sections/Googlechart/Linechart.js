import React, { Component } from 'react';
import Chart from "react-google-charts";

class Linechart extends Component {
    render() {
        return (
            <Chart
                height={'350px'}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Value'],
                    ['2008', 20],
                    ['2009', 10],
                    ['2010', 5],
                    ['2011', 5],
                    ['2012', 20],
                ]}
                options={{
                    // Material design options
                    
                    legend: { position: 'none' },
                    colors: ['#0b62a4'],
                    
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        );
    }
}

export default Linechart;
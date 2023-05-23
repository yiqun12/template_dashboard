import React, { Component } from 'react';
import Chart from "react-google-charts";

class Areachart extends Component {
    render() {
        return (
            <Chart
                height={'350px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Series A', 'Series B'],
                    ['2006', 100, 90],
                    ['2007', 75, 65],
                    ['2008', 50, 40],
                    ['2009', 75, 65],
                    ['2010', 50, 40],
                    ['2011', 75, 65],
                    ['2012', 100, 90],
                ]}
                options={{
                    isStacked: true,
                    legend: { position: 'none' },
                    colors: ['#0b62a4', '#7a92a3'],
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        );
    }
}

export default Areachart;
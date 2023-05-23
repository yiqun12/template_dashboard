import React, { Component } from 'react';

import img1 from '../../../assets/img/costic/country-1.jpg';
import img2 from '../../../assets/img/costic/country-2.jpg';
import img3 from '../../../assets/img/costic/country-3.jpg';
import img4 from '../../../assets/img/costic/country-4.jpg';
import img5 from '../../../assets/img/costic/country-5.jpg';

const countryactivitytable = [
    {
        icon: img1,
        entrance: "725",
        bouncerate: "17.24%",
        exits: "7.65%",
    },
    {
        icon: img2,
        entrance: "890",
        bouncerate: "12.90%",
        exits: "9.12%",
    },
    {
        icon: img3,
        entrance: "729",
        bouncerate: "20.75%",
        exits: "14.29%",
    },
    {
        icon: img4,
        entrance: "316",
        bouncerate: "32.09%",
        exits: "10.99%",
    },
    {
        icon: img5,
        entrance: "275",
        bouncerate: "33.58%",
        exits: "6.75%",
    },
]

class Countryactivity extends Component {
    render() {
        return (
            <div className="ms-panel ms-widget">
                <div className="ms-panel-header">
                    <h6>Top User Activity By Country</h6>
                    <p>Users activity performance and bounce rate based on country</p>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-light">
                            <thead>
                                <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Entrances</th>
                                    <th scope="col">Bounce Rate</th>
                                    <th scope="col">Exits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countryactivitytable.map((item, i) => (
                                    <tr key={i}>
                                        <th scope="row"> <img src={item.icon} alt="flags" /></th>
                                        <td>{item.entrance}</td>
                                        <td>{item.bouncerate}</td>
                                        <td>{item.exits}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countryactivity;
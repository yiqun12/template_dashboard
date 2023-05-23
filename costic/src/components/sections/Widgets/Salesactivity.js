import React, { Component } from 'react';

const salesactivitytable = [
    {
        revenue: "$7860.24",
        products: "Chiken Burger",
        date: "12.01.2022",
    },
    {
        revenue: "$3360.14",
        products: "Cheese Pizza",
        date: "12.01.2022",
    },
    {
        revenue: "$1264.99",
        products: "Stuffed Burger",
        date: "12.01.2022",
    },
    {
        revenue: "$3789.31",
        products: "Classic Pizza",
        date: "12.01.2022",
    },
    {
        revenue: "$3789.31",
        products: "Pancake",
        date: "12.01.2022",
    },
    {
        revenue: "$3789.31",
        products: "Pancake",
        date: "12.01.2022",
    },
]

class Salesactivity extends Component {
    render() {
        return (
            <div className="ms-panel ms-widget ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Sales History</h6>
                    <p>View your sales history</p>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-light">
                            <thead>
                                <tr>
                                    <th scope="col">Revenue ($)</th>
                                    <th scope="col">Products</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesactivitytable.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.revenue}</td>
                                        <td>{item.products}</td>
                                        <td>{item.date}</td>
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

export default Salesactivity;
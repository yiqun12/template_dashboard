import React, { Component } from 'react';


const recentordertable = [
    {
        orderid: "1",
        ordername: "French Fries",
        customername: "Jhon Leo",
        location: "New Town",
        orderstatus: "Pending",
        orderstatuscls: "badge badge-primary",
        deliverytime: "10:05",
        price: "$10"
    },
    {
        orderid: "2",
        ordername: "Mango Pie",
        customername: "Kristien",
        location: "Old Town",
        orderstatus: "Cancelled",
        orderstatuscls: "badge badge-dark",
        deliverytime: "14:05",
        price: "$9"
    },
    {
        orderid: "3",
        ordername: "Fried Egg Sandwich",
        customername: "Jack Suit",
        location: "Oxford Street",
        orderstatus: "Delivered",
        orderstatuscls: "badge badge-success",
        deliverytime: "12:05",
        price: "$19"
    },
    {
        orderid: "4",
        ordername: "Lemon Yogurt Parfait",
        customername: "Alesdro Guitto",
        location: "Church hill",
        orderstatus: "Delivered",
        orderstatuscls: "badge badge-success",
        deliverytime: "12:05",
        price: "$18"
    },
    {
        orderid: "5",
        ordername: "Spicy Grill Sandwich",
        customername: "Jacob Sahwny",
        location: "Palace Road",
        orderstatus: "Delivered",
        orderstatuscls: "badge badge-success",
        deliverytime: "12:05",
        price: "$21"
    },
    {
        orderid: "6",
        ordername: "Chicken Sandwich",
        customername: "Peter Gill",
        location: "Street 21",
        orderstatus: "Pending",
        orderstatuscls: "badge badge-primary",
        deliverytime: "12:05",
        price: "$15"
    },
]


class Recentorder extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover thead-primary">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Delivered Time</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentordertable.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{item.orderid}</th>
                                <td>{item.ordername}</td>
                                <td>{item.customername}</td>
                                <td>{item.location}</td>
                                <td><span className={item.orderstatuscls}>{item.orderstatus}</span>
                                </td>
                                <td>{item.deliverytime}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Recentorder;
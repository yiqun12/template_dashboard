import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'

const invoicelisttable = [
    {
        invoiceid: "15451",
        name: "French Fries",
        orderid: "001",
        invoicedate: "19/02/2022",
        quantity: "10",
        bill: "$10",
    },
    {
        invoiceid: "15452",
        name: "Mango Pie",
        orderid: "004",
        invoicedate: "9/02/2022",
        quantity: "14",
        bill: "$9",
    },
    {
        invoiceid: "45263",
        name: "Fried Egg Sandwich",
        orderid: "003",
        invoicedate: "18/02/2022",
        quantity: "12",
        bill: "$19",
    },
    {
        invoiceid: "45865",
        name: "Lemon Yogurt Parfait",
        orderid: "005",
        invoicedate: "16/02/2022",
        quantity: "05",
        bill: "$18",
    },
    {
        invoiceid: "56652",
        name: "Spicy Grill Sandwich",
        orderid: "014",
        invoicedate: "17/02/2022",
        quantity: "15",
        bill: "$21",
    },
    {
        invoiceid: "65845",
        name: "Chicken Sandwich",
        orderid: "017",
        invoicedate: "14/02/2022",
        quantity: "120",
        bill: "$15",
    },
    {
        invoiceid: "65425",
        name: "Veg Sandwich",
        orderid: "045",
        invoicedate: "13/02/2022",
        quantity: "2",
        bill: "$15",
    },
    {
        invoiceid: "54556",
        name: "Cake",
        orderid: "033",
        invoicedate: "11/02/2022",
        quantity: "15",
        bill: "$15",
    },
    {
        invoiceid: "45556",
        name: "Chicken Fried",
        orderid: "077",
        invoicedate: "12/02/2022",
        quantity: "06",
        bill: "$15",
    },
    {
        invoiceid: "55856",
        name: "Nachos",
        orderid: "868",
        invoicedate: "10/02/2022",
        quantity: "08",
        bill: "$15",
    },
    {
        invoiceid: "36456",
        name: "Spaghetti",
        orderid: "777",
        invoicedate: "20/02/2022",
        quantity: "09",
        bill: "$15",
    },
    {
        invoiceid: "78456",
        name: "Pastries",
        orderid: "555",
        invoicedate: "21/02/2022",
        quantity: "14",
        bill: "$15",
    },
]

class Detailcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="col-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header">
                                    <h6>Invoice List</h6>
                                </div>
                                <div className="ms-panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover thead-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Invoice ID</th>
                                                    <th scope="col">Order Name</th>
                                                    <th scope="col">Order Id</th>
                                                    <th scope="col">Invoice Date</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total Bill</th>
                                                    <th scope="col">Send Invoice</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoicelisttable.map((item, i) => (
                                                    <tr key={i}>
                                                        <th scope="row">{item.invoiceid}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.orderid}</td>
                                                        <td>{item.invoicedate}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.bill}</td>
                                                        <td><Link to="#"><i className="fas fa-paper-plane text-success" /></Link> <Link to="#"><i className="far fa-trash-alt ms-text-danger" /></Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detailcontent;
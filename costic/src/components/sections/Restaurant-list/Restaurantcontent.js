import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Piechart from './Piechart';
import $ from 'jquery';

import tpfdimg1 from '../../../assets/img/costic/pizza.jpg';
import tpfdimg2 from '../../../assets/img/costic/french-fries.jpg';
import tpfdimg3 from '../../../assets/img/costic/cereals.jpg';
import tpfdimg4 from '../../../assets/img/costic/egg-sandwich.jpg';

const topfoodmenutable = [
    {
        photo: tpfdimg1,
        title: "Pizza",
        price: "$20",
        id: "67384917",
    },
    {
        photo: tpfdimg2,
        title: "French Fries",
        price: "$14",
        id: "789393819",
    },
    {
        photo: tpfdimg3,
        title: "Multigrain Hot Cereal",
        price: "$25",
        id: "137893137",
    },
    {
        photo: tpfdimg4,
        title: "Fried Egg Sandwich",
        price: "$10",
        id: "235193138",
    },
]

const restaurentlisttable = [
    {
        id: "15451",
        name: "Delizus",
        location: "New York",
        jndate: "12/10/19",
        rssale: "90",
    },
    {
        id: "15452",
        name: "Lumina",
        location: "New York",
        jndate: "20/9/19",
        rssale: "99",
    },
    {
        id: "45263",
        name: "Food Loung",
        location: "New York",
        jndate: "15/10/19",
        rssale: "95",
    },
    {
        id: "45865",
        name: "Hungry House",
        location: "New York",
        jndate: "21/11/19",
        rssale: "88",
    },
    {
        id: "56652",
        name: "Luncheon",
        location: "New York",
        jndate: "12/11/19",
        rssale: "81",
    },
    {
        id: "65845",
        name: "Spice 'n' Steam",
        location: "New York",
        jndate: "20/10/19",
        rssale: "91",
    },
    {
        id: "65425",
        name: "Tomato",
        location: "New York",
        jndate: "12/10/19",
        rssale: "77",
    },
    {
        id: "54556",
        name: "Bardojo",
        location: "New York",
        jndate: "12/11/19",
        rssale: "78",
    },
    {
        id: "45556",
        name: "Deliceiux",
        location: "New York",
        jndate: "22/10/19",
        rssale: "88",
    },
    {
        id: "55856",
        name: "Food Forest",
        location: "New York",
        jndate: "12/10/19",
        rssale: "75",
    },
    {
        id: "36456",
        name: "Food Bella",
        location: "New York",
        jndate: "18/11/19",
        rssale: "90",
    },
    {
        id: "78456",
        name: "Red Chilly",
        location: "New York",
        jndate: "12/10/19",
        rssale: "85",
    },
]
class Restaurantcontent extends Component {
    addstars = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-rating-item');
        $(parentTask).prevAll().removeClass('rated');
        $(parentTask).addClass('rated');
        $(parentTask).nextAll().addClass('rated');
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        {/* Active Orders Graph */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="ms-panel ms-panel-fh">
                                    <div className="ms-panel-header">
                                        <h6>Restaurant wise sales</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <Piechart />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header new">
                                        <h6>Top Food Menu</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Food Item</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Product ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {topfoodmenutable.map((item, i) => (
                                                        <tr key={i}>
                                                            <td className="ms-table-f-w"> <img src={item.photo} alt="people" /> {item.title} </td>
                                                            <td>{item.price}</td>
                                                            <td>{item.id}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h6>Invoice List</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover thead-primary">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Restaurant ID</th>
                                                        <th scope="col">Restaurant Name</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Ratings</th>
                                                        <th scope="col">Joining Date</th>
                                                        <th scope="col">Restaurant Sale(%)</th>
                                                        <th scope="col">Send / Edit / Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {restaurentlisttable.map((item, i) => (
                                                        <tr key={i}>
                                                            <th scope="row">{item.id}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.location}</td>
                                                            <td>
                                                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                    <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                                                    <li className="ms-rating-item rated"  onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                                                    <li className="ms-rating-item rated"  onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                                                    <li className="ms-rating-item rated"  onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                                                    <li className="ms-rating-item rated"  onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                                                </ul>
                                                            </td>
                                                            <td>{item.jndate}</td>
                                                            <td>{item.rssale}</td>
                                                            <td><Link to="#"><i className="fas fa-paper-plane text-secondary text-success" /></Link>
                                                                <Link to="#"><i className="fas fa-pencil-alt text-secondary" /></Link>
                                                                <Link to="#"><i className="far fa-trash-alt ms-text-danger" /></Link></td>
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
            </div>

        );
    }
}

export default Restaurantcontent;
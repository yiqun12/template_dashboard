import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

import img1 from '../../../assets/img/costic/food-1.jpg';
import img2 from '../../../assets/img/costic/food-2.jpg';
import img3 from '../../../assets/img/costic/food-3.jpg';
import img4 from '../../../assets/img/costic/food-4.jpg';
import img5 from '../../../assets/img/costic/food-5.jpg';
import img6 from '../../../assets/img/costic/food-6.jpg';
import img7 from '../../../assets/img/costic/food-7.jpg';
import img8 from '../../../assets/img/costic/food-8.jpg';

const gridboxes = [
    {
        photo: img1,
        title: "Veggies",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        statuscls: "badge badge-success",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img2,
        title: "Garlic Bread",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        statuscls: "badge badge-primary",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img3,
        title: "Veg Sandwich",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        statuscls: "badge badge-success",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img4,
        title: "Roast Sandwich",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        statuscls: "badge badge-primary",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img5,
        title: "Burger",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        statuscls: "badge badge-success",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img6,
        title: "Veggies",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        statuscls: "badge badge-success",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img7,
        title: "Pepperoni Pizza",
        price: "$45.50",
        qyt: "6224",
        status: "Out of Stock",
        statuscls: "badge badge-primary",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
    {
        photo: img8,
        title: "Egg McMuffin",
        price: "$45.50",
        qyt: "1467",
        status: "In Stock",
        statuscls: "badge badge-success",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur adipiscing"
    },
]

class Gridcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="row">
                            {gridboxes.map((item, i) => (
                                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="ms-card">
                                        <div className="ms-card-img">
                                            <img src={item.photo} alt="card_img" />
                                        </div>
                                        <div className="ms-card-body">
                                            <div className="new">
                                                <h6 className="mb-0">{item.title} </h6>
                                                <h6 className="ms-text-primary mb-0">{item.price}</h6>
                                            </div>
                                            <div className="new meta">
                                                <p>Qty:{item.qyt} </p>
                                                <span className={item.statuscls}>{item.status}</span>
                                            </div>
                                            <p>{item.para}</p>
                                            <div className="new mb-0">
                                                <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                                                <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Gridcontent;
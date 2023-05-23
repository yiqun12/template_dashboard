import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumb';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/costic/food-1.jpg';
import img2 from '../../../assets/img/costic/food-2.jpg';
import img3 from '../../../assets/img/costic/food-3.jpg';
import img4 from '../../../assets/img/costic/food-4.jpg';
import img5 from '../../../assets/img/costic/food-5.jpg';
import img6 from '../../../assets/img/costic/food-6.jpg';

const menuboxes = [
    {
        photo: img1,
        title: "Pizza",
        price: "$15",
        order: "150",
        revenue: "$1000",
    },
    {
        photo: img2,
        title: "Sandwiches",
        price: "$23",
        order: "150",
        revenue: "$1000",
    },
    {
        photo: img3,
        title: "Fries",
        price: "$15",
        order: "100",
        revenue: "$1400",
    },
    {
        photo: img4,
        title: "Burger",
        price: "$34",
        order: "200",
        revenue: "$5000",
    },
    {
        photo: img5,
        title: "Grilled",
        price: "$25",
        order: "180",
        revenue: "$2000",
    },
    {
        photo: img6,
        title: "Dumplings",
        price: "$15",
        order: "150",
        revenue: "$3000",
    },
]

class Catelougebox extends Component {
    render() {
        return (
            <div className="ms-content-wrapper box">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumbs />
                    </div>
                    {menuboxes.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="ms-card">
                                <div className="ms-card-img">
                                    <img src={item.photo} alt="card_img" />
                                </div>
                                <div className="ms-card-body ">
                                    <div className="wrapper-new2 ">
                                        <h6>{item.title}</h6>
                                        <span className="white">{item.price}</span>
                                    </div>
                                    <div className="wrapper-new1">
                                        <span>Total Order :<strong className="color-red">{item.order}</strong> </span>
                                        <span>Revenue :<strong className="color-red">{item.revenue}</strong></span>
                                    </div>
                                    <Link to="#" className="btn btn-primary btn-md btn-block">See More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-xl-12 col-md-12">
                        <div className="load">
                            <i className="fas fa-redo alt  space text-muted" aria-hidden="true" /><span className="more">Load More</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Catelougebox;
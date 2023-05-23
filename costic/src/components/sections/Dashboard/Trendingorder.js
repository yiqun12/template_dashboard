import React, { Component } from 'react';

import img1 from '../../../assets/img/costic/food-5.jpg';
import img2 from '../../../assets/img/costic/food-2.jpg';
import img3 from '../../../assets/img/costic/food-4.jpg';
import img4 from '../../../assets/img/costic/food-3.jpg';

const trendfood = [
    {
        photo: img1,
        title: "Meat Stew",
        price: "$25.00",
        order: "15",
        income: "$175",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-lg-20",
    },
    {
        photo: img2,
        title: "Pancake",
        price: "$50.00",
        order: "75",
        income: "$275",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-lg-20",
    },
    {
        photo: img3,
        title: "Burger",
        price: "$45.00",
        order: "85",
        income: "$575",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6",
    },
    {
        photo: img4,
        title: "Saled",
        price: "$85.00",
        order: "175",
        income: "$775",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6",
    },
]

class Trendingorder extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Trending Orders</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        {trendfood.map((item, i) => (
                            <div key={i} className={item.resposnivecls}>
                                <div className="ms-card no-margin">
                                    <div className="ms-card-img">
                                        <img src={item.photo} alt="card_img" />
                                    </div>
                                    <div className="ms-card-body">
                                        <div className="ms-card-heading-title">
                                            <h6>{item.title}</h6>
                                            <span className="green-text"><strong>{item.price}</strong></span>
                                        </div>
                                        <div className="ms-card-heading-title">
                                            <p>Orders <span className="red-text">{item.order}</span></p>
                                            <p>Income <span className="red-text">{item.income}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Trendingorder;
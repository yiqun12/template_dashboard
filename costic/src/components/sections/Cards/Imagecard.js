import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/costic/food-5.jpg';
import img2 from '../../../assets/img/costic/food-6.jpg';
import img3 from '../../../assets/img/costic/food-7.jpg';
import img4 from '../../../assets/img/costic/food-8.jpg';

const imagecardpost = [
    {
        photo: img1,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img2,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img3,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img4,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
]

class Imagecard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Image Card with Button</h2>
                </div>
                {imagecardpost.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-img">
                                <img src={item.photo} alt="card_img" />
                            </div>
                            <div className="ms-card-body">
                                <h6>{item.title}</h6>
                                <p>{item.para}</p>
                                <Link to="/cards" className="btn btn-primary btn-block">Learn More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Imagecard;
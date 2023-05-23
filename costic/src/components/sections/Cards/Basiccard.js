import React, { Component } from 'react';

import img1 from '../../../assets/img/costic/food-2.jpg';
import img2 from '../../../assets/img/costic/food-1.jpg';
import img3 from '../../../assets/img/costic/food-3.jpg';
import img4 from '../../../assets/img/costic/food-4.jpg';

const basiccardpost = [
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
class Basiccard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Basic Image Card</h2>
                </div>
                {basiccardpost.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-img">
                                <img src={item.photo} alt="card_img" />
                            </div>
                            <div className="ms-card-body">
                                <h6>{item.title}</h6>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Basiccard;
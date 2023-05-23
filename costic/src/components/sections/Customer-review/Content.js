import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';

// Images
import customerimg1 from '../../../assets/img/costic/customer-1.jpg';
import customerimg2 from '../../../assets/img/costic/customer-2.jpg';
import customerimg3 from '../../../assets/img/costic/customer-3.jpg';
import customerimg4 from '../../../assets/img/costic/customer-4.jpg';
import customerimg5 from '../../../assets/img/costic/customer-5.jpg';

// Array
const reviewdata = [
    {
        photo: customerimg1,
        name: "John Doe",
        tag: "Grilled Sandwich",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        chat: "16",
        attachment: "3"
    },
    {
        photo: customerimg2,
        name: "Ricky Martin",
        tag: "Fried Egg Sandwich",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        chat: "16",
        attachment: "3"
    },
    {
        photo: customerimg3,
        name: "Joe semual",
        tag: "Peri Peri Fries",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        chat: "16",
        attachment: "3"
    },
    {
        photo: customerimg4,
        name: "Ricky Martin",
        tag: "Spicy Grilled Burger",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        chat: "16",
        attachment: "3"
    },
    {
        photo: customerimg5,
        name: "Lim Shojin",
        tag: "Grilled Sandwich",
        date: "February 24, 2022",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...",
        chat: "16",
        attachment: "3"
    },
]

class Content extends Component {
    // Ratings
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
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                </div>
                <div className="ms-content-wrapper">
                    <div className="row">
                        {/* Recent Support Tickets */}
                        <div className="col-xl-12 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-body p-0">
                                    <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                                        {reviewdata.map((item, i) => (
                                            <li key={i} className="ms-list-item">
                                                <Link to="/customer-review" className="media clearfix">
                                                    <img src={item.photo} className="ms-img-round ms-img-small" alt="This is another feature" />
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="new">
                                                                <h5 className="ms-feed-user mb-0">{item.name}</h5>
                                                                <h6 className="ml-4 mb-0 text-red">{item.tag}</h6>
                                                            </div>
                                                            <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                                                <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i>
                                                                </li>
                                                                <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i>
                                                                </li>
                                                                <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i>
                                                                </li>
                                                                <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i>
                                                                </li>
                                                                <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i>
                                                                </li>
                                                            </ul>
                                                        </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> {item.date}</span>
                                                        <p className="d-block">{item.para}</p>
                                                        <div className="d-flex justify-content-between align-items-end">
                                                            <div className="ms-feed-controls"> <span>
                                                                <i className="material-icons">chat</i> {item.chat} </span>
                                                                <span>
                                                                    <i className="material-icons">attachment</i> {item.attachment} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
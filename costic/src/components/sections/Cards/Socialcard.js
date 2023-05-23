import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';

import img1 from '../../../assets/img/costic/customer-4.jpg';
import img2 from '../../../assets/img/costic/customer-6.jpg';
import img3 from '../../../assets/img/costic/customer-7.jpg';

import fdimg1 from '../../../assets/img/costic/food-2.jpg';
import fdimg2 from '../../../assets/img/costic/food-4.jpg';
import fdimg3 from '../../../assets/img/costic/food-6.jpg';

const socialcardpost = [
    {
        photo: img1,
        foodimg:fdimg1,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
    {
        photo: img2,
        foodimg:fdimg2,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
    {
        photo: img3,
        foodimg:fdimg3,
        name: "John Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
]

class Socialcard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Social Post Cards</h2>
                </div>
                {socialcardpost.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="mr-2 align-self-center">
                                        <img src={item.photo} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <h6>{item.name} </h6>
                                        <Dropdown className="float-right">
                                            <Dropdown.Toggle as={NavLink} className="p-0">
                                                <i className="material-icons">more_vert</i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <ul className="dropdown-menu-right mb-0">
                                                    <li className="ms-dropdown-list">
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Comment</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Share</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Favorite</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p className="fs-12 my-1 text-disabled">{item.time}</p>
                                    </div>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.para}</p>
                            </div>
                            <div className="ms-card-img">
                                <img src={item.foodimg} alt="card_img" />
                            </div>
                            <div className="ms-card-footer text-disabled d-flex">
                                <div className="ms-card-options">
                                    <i className="material-icons">favorite</i> {item.like}
          </div>
                                <div className="ms-card-options">
                                    <i className="material-icons">comment</i> {item.comment}
          </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Socialcard;
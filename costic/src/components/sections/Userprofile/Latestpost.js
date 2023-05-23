import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, NavLink } from 'react-bootstrap';

import customerimg1 from '../../../assets/img/costic/customer-1.jpg';
import customerimg2 from '../../../assets/img/costic/customer-2.jpg';
import customerimg3 from '../../../assets/img/costic/customer-6.jpg';

import foodimg1 from '../../../assets/img/costic/food-3.jpg';
import foodimg2 from '../../../assets/img/costic/food-6.jpg';
import foodimg3 from '../../../assets/img/costic/food-1.jpg';

const latestproduct = [
    {
        photo: customerimg1,
        foodimg: foodimg1,
        name: "Jhon Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
    {
        photo: customerimg2,
        foodimg: foodimg2,
        name: "Jhon Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
    {
        photo: customerimg3,
        foodimg: foodimg3,
        name: "Jhon Doe",
        time: "30 seconds ago",
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        like: "982",
        comment: "785",
    },
]

class Latestpost extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-body">
                    <h2 className="section-title">Your Latest Posts</h2>
                    <div className="row">
                        {latestproduct.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
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
                                        <h6 className="fw-6">{item.title}</h6>
                                        <p>{item.para}</p>
                                    </div>
                                    <div className="ms-card-img">
                                        <img src={item.foodimg} alt="card_img" />
                                    </div>
                                    <div className="ms-card-footer text-disabled d-flex">
                                        <div className="ms-card-options"> <i className="material-icons">favorite</i> {item.like} </div>
                                        <div className="ms-card-options"> <i className="material-icons">comment</i> {item.comment} </div>
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

export default Latestpost;
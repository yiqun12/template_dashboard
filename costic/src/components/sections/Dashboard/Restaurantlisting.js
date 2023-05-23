import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, NavLink } from 'react-bootstrap';
import $ from 'jquery';

import img1 from '../../../assets/img/costic/customer-1.jpg';
import img2 from '../../../assets/img/costic/customer-2.jpg';
import img3 from '../../../assets/img/costic/customer-6.jpg';

import foodimg1 from '../../../assets/img/costic/food-1.jpg';
import foodimg2 from '../../../assets/img/costic/food-2.jpg';
import foodimg3 from '../../../assets/img/costic/food-3.jpg';

const restaurentlisting = [
    {
        photo: img1,
        foodimg: foodimg1,
        title: "Hunger House",
        addtime: "30 seconds ago",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        favorite: "982",
        comment: "785",
    },
    {
        photo: img2,
        foodimg: foodimg2,
        title: "Food Lounge",
        addtime: "30 seconds ago",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        favorite: "982",
        comment: "785",
    },
    {
        photo: img3,
        foodimg: foodimg3,
        title: "Delizious",
        addtime: "30 seconds ago",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        favorite: "982",
        comment: "785",
    },
]


class Restaurantlisting extends Component {
    addstars = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-rating-item');
        $(parentTask).prevAll().removeClass('rated');
        $(parentTask).addClass('rated');
        $(parentTask).nextAll().addClass('rated');
    }
    render() {
        return (
            <div className="row">
                {restaurentlisting.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="ms-card no-margin">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="mr-2 align-self-center">
                                        <img src={item.photo} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <h6>{item.title} </h6>
                                        <Dropdown className="float-right">
                                            <Dropdown.Toggle as={NavLink} className="p-0">
                                                <i className="material-icons">more_vert</i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <ul className="dropdown-menu-right mb-0">
                                                    <li className="ms-dropdown-list">
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Sales</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Details</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Remove</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p className="fs-12 my-1 text-disabled">{item.addtime}</p>
                                    </div>
                                </div>
                                <ul className="ms-star-rating rating-fill rating-circle ratings-new">
                                    <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                    <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                    <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                    <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                    <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                </ul>
                                <p>{item.para}</p>
                            </div>
                            <div className="ms-card-img">
                                <img src={item.foodimg} alt="card_img" />
                            </div>
                            <div className="ms-card-footer text-disabled d-flex">
                                <div className="ms-card-options">
                                    <i className="material-icons">favorite</i> {item.favorite} </div>
                                <div className="ms-card-options">
                                    <i className="material-icons">comment</i> {item.comment} </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Restaurantlisting;
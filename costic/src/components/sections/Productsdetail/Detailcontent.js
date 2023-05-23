import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Carousel } from 'react-bootstrap'

class Detailcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Product Details</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Carousel id="arrowSlider" className="ms-arrow-slider carousel slide" data-ride="carousel" data-interval="false" indicators={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="First slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3 className="text-white">Pizaa img 1</h3>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-2.jpg" alt="Second slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3 className="text-white">Pizaa img 2</h3>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-3.jpg" alt="Third slide" />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3 className="text-white">Pizaa img 3</h3>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body">
                                <h4 className="section-title bold">Product Info</h4>
                                <table className="table ms-profile-information">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Price</th>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Product Category</th>
                                            <td>Veg</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Availiblity</th>
                                            <td><span className="badge badge-pill badge-primary">In stock</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Delivery Charges</th>
                                            <td>Free</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SKU Identification</th>
                                            <td>23445</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="new">
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-secondary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body">
                                <h4 className="section-title bold">Product Details </h4>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="ms-quick-stats">
                                <div className="ms-stats-grid">
                                    <i className="fa fa-bullhorn" />
                                    <p className="ms-text-dark">1,033</p>
                                    <span>Today Order</span>
                                </div>
                                <div className="ms-stats-grid">
                                    <i className="fa fa-heart" />
                                    <p className="ms-text-dark">3,039</p>
                                    <span>Favourite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detailcontent;
import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Carousel } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Slider</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>interval="false"</code> in <code>.carousel</code> to disable autoplay</p>
                                <Carousel indicators={false} controls={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-2.jpg" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-3.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Slider with Arrows and Captions</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>data-interval="number"</code> in <code>.carousel</code> to enable autoplay and specify a specific time between each slide</p>
                                <Carousel className="ms-arrow-slider" indicators={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-4.jpg" alt="First slide" />
                                        <Carousel.Caption className="d-none d-md-block">
                                            <h5>Orange Sunset</h5>
                                            <p>Lorem Ipsum asit dolor kimet</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="Second slide" />
                                        <Carousel.Caption className="d-none d-md-block">
                                            <h5>Purple Skies</h5>
                                            <p>Lorem Ipsum asit dolor kimet</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-2.jpg" alt="Third slide" />
                                        <Carousel.Caption className="d-none d-md-block">
                                            <h5>Night Light</h5>
                                            <p>Lorem Ipsum asit dolor kimet</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Slider with Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Carousel className="ms-button-slider text-center" indicators={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-3.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-2.jpg" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Slider with Indicators</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Carousel className="ms-indicator-slider" controls={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-2.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/banner-1.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Slider with Dotted Indicator</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Carousel className="ms-dotted-indicator-slider">
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-4.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-3.jpg" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-2.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Slider Images</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Carousel className="ms-image-slider" controls={false}>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-1.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-2.jpg" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="assets/img/costic/add-product-3.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
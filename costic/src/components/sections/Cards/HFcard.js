import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HFcard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Cards With Header and Footer</h2>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card">
                        <div className="ms-card-header">
                            <h6>Lorem Ipsum Corporate</h6>
                        </div>
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                        <div className="ms-card-footer text-disabled d-flex">
                            <div className="ms-card-options">
                                <i className="material-icons">favorite</i> 982
          </div>
                            <div className="ms-card-options">
                                <i className="material-icons">comment</i> 785
          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card">
                        <div className="ms-card-header">
                            <h6>Lorem Ipsum Corporate</h6>
                        </div>
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                        <div className="ms-card-footer">
                            <Link to="/cards">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card">
                        <div className="ms-card-header">
                            <h6>Lorem Ipsum Corporate</h6>
                        </div>
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                        <div className="ms-card-footer text-center">
                            <Link to="/cards">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="ms-card">
                        <div className="ms-card-header">
                            <h6>Lorem Ipsum Corporate</h6>
                        </div>
                        <div className="ms-card-body">
                            <h6>This is a card Title</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                        </div>
                        <div className="ms-card-footer text-right">
                            <Link to="/cards">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HFcard;
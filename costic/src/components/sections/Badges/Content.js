import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Round Badges</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.badge-state</code> for different states</p>
                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-secondary">Secondary</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-danger">Danger</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-light">Light</span>
                                <span className="badge badge-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Badge Square</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.badge-square</code> for square badges</p>
                                <span className="badge badge-square badge-primary">Primary</span>
                                <span className="badge badge-square badge-secondary">Secondary</span>
                                <span className="badge badge-square badge-success">Success</span>
                                <span className="badge badge-square badge-danger">Danger</span>
                                <span className="badge badge-square badge-warning">Warning</span>
                                <span className="badge badge-square badge-info">Info</span>
                                <span className="badge badge-square badge-light">Light</span>
                                <span className="badge badge-square badge-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Badge Pills</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.badge-pill</code> for pill badges</p>
                                <span className="badge badge-pill badge-primary">Primary</span>
                                <span className="badge badge-pill badge-secondary">Secondary</span>
                                <span className="badge badge-pill badge-success">Success</span>
                                <span className="badge badge-pill badge-danger">Danger</span>
                                <span className="badge badge-pill badge-warning">Warning</span>
                                <span className="badge badge-pill badge-info">Info</span>
                                <span className="badge badge-pill badge-light">Light</span>
                                <span className="badge badge-pill badge-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Badges with Links</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Wrap in an <code>a</code> tag</p>
                                <Link to="/badges" className="badge badge-primary">Primary</Link>
                                <Link to="/badges" className="badge badge-secondary">Secondary</Link>
                                <Link to="/badges" className="badge badge-success">Success</Link>
                                <Link to="/badges" className="badge badge-danger">Danger</Link>
                                <Link to="/badges" className="badge badge-warning">Warning</Link>
                                <Link to="/badges" className="badge badge-info">Info</Link>
                                <Link to="/badges" className="badge badge-light">Light</Link>
                                <Link to="/badges" className="badge badge-dark">Dark</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Outline Badges</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.badge-outline-state</code> for different states</p>
                                <span className="badge badge-outline-primary">Primary</span>
                                <span className="badge badge-outline-secondary">Secondary</span>
                                <span className="badge badge-outline-success">Success</span>
                                <span className="badge badge-outline-danger">Danger</span>
                                <span className="badge badge-outline-warning">Warning</span>
                                <span className="badge badge-outline-info">Info</span>
                                <span className="badge badge-outline-light">Light</span>
                                <span className="badge badge-outline-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Gradient Badges</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.badge-gradient-state</code> for different states</p>
                                <span className="badge badge-gradient-primary">Primary</span>
                                <span className="badge badge-gradient-secondary">Secondary</span>
                                <span className="badge badge-gradient-success">Success</span>
                                <span className="badge badge-gradient-danger">Danger</span>
                                <span className="badge badge-gradient-warning">Warning</span>
                                <span className="badge badge-gradient-info">Info</span>
                                <span className="badge badge-gradient-light">Light</span>
                                <span className="badge badge-gradient-dark">Dark</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel ms-panel-fh ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Badges within buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <button type="button" className="btn btn-primary" name="button">Notifications <span className="badge badge-pill badge-outline-primary">4</span></button>
                                <button type="button" className="btn btn-secondary" name="button">Edit <span className="badge badge-pill badge-outline-secondary">4</span></button>
                                <button type="button" className="btn btn-warning" name="button">Warnings <span className="badge badge-pill badge-outline-warning">8</span></button>
                                <button type="button" className="btn btn-danger" name="button">Alerts <span className="badge badge-pill badge-outline-danger">25</span></button>
                                <button type="button" className="btn btn-info" name="button">Info <span className="badge badge-pill badge-outline-info">16</span></button>
                                <button type="button" className="btn btn-light" name="button">Users <span className="badge badge-pill badge-outline-light">7</span></button>
                                <button type="button" className="btn btn-dark" name="button">Messages <span className="badge badge-pill badge-outline-dark">104</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.alert-state</code> for default alert states</p>
                                <div className="alert alert-success" role="alert">
                                    <strong>Well done!</strong> You successfully read this important alert message.
          </div>
                                <div className="alert alert-info" role="alert">
                                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
                                <div className="alert alert-warning" role="alert">
                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
                                <div className="alert alert-danger" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                                <div className="alert alert-brand" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Outline Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.alert-outline</code> for default alert states</p>
                                <div className="alert alert-success alert-outline" role="alert">
                                    <strong>Well done!</strong> You successfully read this important alert message.
          </div>
                                <div className="alert alert-info alert-outline" role="alert">
                                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
                                <div className="alert alert-warning alert-outline" role="alert">
                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
                                <div className="alert alert-danger alert-outline" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                                <div className="alert alert-brand alert-outline" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default with Icon Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="alert alert-success" role="alert">
                                    <i className="flaticon-tick-inside-circle" /> <strong>Well done!</strong> You successfully read this important alert message.
          </div>
                                <div className="alert alert-info" role="alert">
                                    <i className="flaticon-information" /> <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
                                <div className="alert alert-warning" role="alert">
                                    <i className="flaticon-alert" /> <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
                                <div className="alert alert-danger" role="alert">
                                    <i className="flaticon-alert-1" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                                <div className="alert alert-brand" role="alert">
                                    <i className="flaticon-diamond" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Outline with Icon Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="alert alert-success alert-outline" role="alert">
                                    <i className="flaticon-tick-inside-circle" /> <strong>Well done!</strong> You successfully read this important alert message.
          </div>
                                <div className="alert alert-info alert-outline" role="alert">
                                    <i className="flaticon-information" /> <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
                                <div className="alert alert-warning alert-outline" role="alert">
                                    <i className="flaticon-alert" /> <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
                                <div className="alert alert-danger alert-outline" role="alert">
                                    <i className="flaticon-alert-1" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                                <div className="alert alert-brand alert-outline" role="alert">
                                    <i className="flaticon-diamond" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Solid Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.alert-solid</code> for default alert states</p>
                                <div className="alert alert-success alert-solid" role="alert">
                                    <strong>Well done!</strong> You successfully read this important alert message.
          </div>
                                <div className="alert alert-info alert-solid" role="alert">
                                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
                                <div className="alert alert-warning alert-solid" role="alert">
                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
                                <div className="alert alert-danger alert-solid" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
                                <div className="alert alert-brand alert-solid" role="alert">
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
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
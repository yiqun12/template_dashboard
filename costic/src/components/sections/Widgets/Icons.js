import React, { Component } from 'react';

class Icons extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <h6>Total Subscriptions</h6>
                                <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 4567</p>
                                <p className="fs-12">48% From Last 24 Hours</p>
                            </div>
                        </div>
                        <i className="flaticon-statistics" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <h6>Budgets</h6>
                                <p className="ms-card-change"> $80,950</p>
                                <p className="fs-12">2% Decreased from last budget</p>
                            </div>
                        </div>
                        <i className="flaticon-stats" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card card-gradient-success ms-widget ms-infographics-widget">
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <h6>Total Users</h6>
                                <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 4567</p>
                                <p className="fs-12">48% From Last 24 Hours</p>
                            </div>
                        </div>
                        <i className="flaticon-user" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="ms-card card-gradient-secondary ms-widget ms-infographics-widget">
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <h6>Conversions</h6>
                                <p className="ms-card-change"> $80,950</p>
                                <p className="fs-12">2% Decreased from last budget</p>
                            </div>
                        </div>
                        <i className="flaticon-reuse" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Icons;